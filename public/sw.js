// Art Collection PWA Service Worker
// Offline-first caching strategy with aggressive precaching

const CACHE_NAME = 'artcollection-v4';
const RUNTIME_CACHE = 'artcollection-runtime-v4';
const ASSETS_TO_PRECACHE = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/logo.svg',
  '/pages.json',
];

// Install event - precache essential assets
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Precaching core assets');
        return cache.addAll(ASSETS_TO_PRECACHE);
      })
      .then(() => {
        console.log('Service Worker installed and ready to work offline');
        return self.skipWaiting();
      })
      .catch(error => {
        console.error('Cache installation failed:', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        console.log('Found caches:', cacheNames);
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log('Claiming clients...');
        return self.clients.claim();
      })
      .then(() => {
        console.log('Triggering initial sync...');
        // Notify all clients to trigger initial sync
        return self.clients.matchAll();
      })
      .then(clients => {
        clients.forEach(client => {
          client.postMessage({
            type: 'SW_ACTIVATED',
          });
        });
      })
  );
});

// Fetch event - network-first for data, cache-first for assets
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other non-http requests
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

  // Handle Vite dev server requests (HMR, client, etc)
  // These are only needed in development mode and will fail when offline
  if (event.request.url.includes('/@vite') ||
      event.request.url.includes('/@react-refresh') ||
      event.request.url.includes('/src/') ||
      event.request.url.includes('main.jsx') ||
      event.request.url.includes('/client')) {
    // Don't intercept - let these fail naturally or be handled by browser
    // This allows the app to still function from cache even if these dev resources fail
    return;
  }

  // Stale-while-revalidate strategy for dynamic data files (pages.json, etc.)
  // Serves cached data immediately, updates in background
  if (event.request.url.includes('/data/') || event.request.url.includes('.json')) {
    event.respondWith(
      caches.match(event.request)
        .then(cachedResponse => {
          // Create a fetch request for fresh data
          const fetchPromise = fetch(event.request)
            .then(response => {
              // Only cache successful responses
              if (!response || response.status !== 200 || response.type !== 'basic') {
                return response;
              }

              // Clone and update cache in background
              const responseToCache = response.clone();
              caches.open(RUNTIME_CACHE)
                .then(cache => {
                  cache.put(event.request, responseToCache);
                  console.log('Updated cache for:', event.request.url);
                })
                .catch(error => {
                  console.log('Cache write failed:', error);
                });

              // Parse response to get page count (separate clone for parsing)
              response.clone().json()
                .then(data => {
                  const pageCount = Array.isArray(data) ? data.length : 0;
                  const lastPage = Array.isArray(data) && data.length > 0 ? data[data.length - 1].title : null;

                  // Notify all clients about the sync
                  self.clients.matchAll().then(clients => {
                    clients.forEach(client => {
                      client.postMessage({
                        type: 'SYNC_UPDATED',
                        totalPages: pageCount,
                        lastPage: lastPage,
                        buildDate: new Date().toISOString(),
                      });
                    });
                  });
                })
                .catch(e => console.log('Could not parse response:', e));

              return response;
            })
            .catch(error => {
              console.log('Network fetch failed for:', event.request.url, error);
              // If both cache and network fail, return empty response
              if (!cachedResponse) {
                return new Response('[]', { status: 200, headers: { 'Content-Type': 'application/json' } });
              }
              throw error;
            });

          // Return cached response immediately, fetch fresh data in background
          return cachedResponse || fetchPromise;
        })
    );
    return;
  }

  // Special handling for HTML documents (navigation requests)
  // Use cache-first for navigation to support offline
  if (event.request.mode === 'navigate') {
    event.respondWith(
      // First, try to get from cache
      caches.match(event.request)
        .then(cachedResponse => {
          if (cachedResponse) {
            console.log('Returning cached navigation response for:', event.request.url);
            return cachedResponse;
          }

          // If not in cache, try network
          return fetch(event.request)
            .then(response => {
              // Validate response
              if (!response || response.status !== 200) {
                console.log('Invalid response from network:', event.request.url, response?.status);
                return response;
              }

              // Clone and cache successful responses
              const responseToCache = response.clone();
              caches.open(RUNTIME_CACHE)
                .then(cache => {
                  console.log('Caching navigation response:', event.request.url);
                  cache.put(event.request, responseToCache);
                })
                .catch(error => {
                  console.log('Failed to cache navigation response:', error);
                });

              return response;
            })
            .catch(error => {
              // Network failed and nothing in cache
              console.log('Navigation fetch failed and no cache:', error);

              // Try fallback to index.html
              return caches.match('/index.html')
                .then(indexResponse => {
                  if (indexResponse) {
                    console.log('Using cached index.html as fallback');
                    return indexResponse;
                  }

                  // Last resort
                  console.log('No fallback available - returning error response');
                  return new Response('Offline - unable to load page', {
                    status: 503,
                    headers: { 'Content-Type': 'text/plain' }
                  });
                })
                .catch(cacheError => {
                  console.error('Error checking cache for index.html:', cacheError);
                  return new Response('Service offline', { status: 503 });
                });
            });
        })
        .catch(error => {
          console.error('Error in navigation handler:', error);
          return new Response('Service Worker error', { status: 500 });
        })
    );
    return;
  }

  // Cache-first strategy for static assets
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached response if available
        if (response) {
          return response;
        }

        // Try to fetch from network
        return fetch(event.request)
          .then(response => {
            // Only cache successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            // Cache the response
            caches.open(RUNTIME_CACHE)
              .then(cache => {
                cache.put(event.request, responseToCache);
              })
              .catch(error => {
                console.log('Cache write failed:', error);
              });

            return response;
          })
          .catch(error => {
            // Network request failed - try to return a cached fallback
            console.log('Network request failed:', error);

            // Return offline page if available
            if (event.request.mode === 'navigate') {
              return caches.match('/index.html');
            }

            // Return offline asset
            return caches.match(event.request);
          });
      })
  );
});

// Handle message from client for cache updates
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
