// Art Collection PWA Service Worker
// Offline-first caching strategy with aggressive precaching

const CACHE_NAME = 'artcollection-v1';
const RUNTIME_CACHE = 'artcollection-runtime';
const ASSETS_TO_PRECACHE = [
  '/',
  '/index.html',
  '/favicon.ico',
  '/logo.svg',
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
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE) {
              console.log('Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - offline-first strategy
self.addEventListener('fetch', event => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip chrome extensions and other non-http requests
  if (event.request.url.startsWith('chrome-extension://')) {
    return;
  }

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
