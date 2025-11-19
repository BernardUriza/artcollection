import { useState, useEffect } from 'react';

function PWAStatusBadge() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [cacheSize, setCacheSize] = useState('Calculando...');
  const [swRegistration, setSwRegistration] = useState(null);
  const [syncInfo, setSyncInfo] = useState({
    lastSync: null,
    totalPages: 0,
    lastPageSynced: null,
    buildDate: new Date().toISOString(),
  });

  // Function to sync pages data
  const syncPages = () => {
    console.log('Syncing pages...');
    fetch('/pages.json')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched pages:', data);
        const pageCount = Array.isArray(data) ? data.length : 0;
        const lastPage = Array.isArray(data) && data.length > 0 ? data[data.length - 1].title : null;

        const newInfo = {
          lastSync: new Date().toISOString(),
          totalPages: pageCount,
          lastPageSynced: lastPage,
          buildDate: new Date().toISOString(),
        };
        setSyncInfo(newInfo);
        try {
          localStorage.setItem('pwa-sync-info', JSON.stringify(newInfo));
          console.log('Updated sync info:', newInfo);
        } catch (e) {
          console.error('Error saving sync info:', e);
        }
      })
      .catch(e => console.error('Error fetching pages:', e));
  };

  // Calculate cache size
  const calculateCacheSize = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        let totalSize = 0;

        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName);
          const keys = await cache.keys();

          for (const request of keys) {
            const response = await cache.match(request);
            if (response) {
              const blob = await response.blob();
              totalSize += blob.size;
            }
          }
        }

        const sizeInMB = (totalSize / (1024 * 1024)).toFixed(2);
        setCacheSize(`${sizeInMB} MB`);
      } catch (e) {
        console.error('Error calculating cache size:', e);
        setCacheSize('N/A');
      }
    }
  };

  // Clear cache
  const clearCache = async () => {
    if (confirm('¿Estás seguro de que quieres limpiar el caché? Esto puede hacer que la app sea más lenta hasta que se vuelva a cachear.')) {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
        setCacheSize('0 MB');
        alert('Caché limpiado exitosamente');
        window.location.reload();
      } catch (e) {
        console.error('Error clearing cache:', e);
        alert('Error al limpiar el caché');
      }
    }
  };

  // Update PWA
  const updatePWA = () => {
    if (swRegistration && swRegistration.waiting) {
      swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' });
      setUpdateAvailable(false);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    }
  };

  useEffect(() => {
    // Heartbeat mechanism - check connectivity every 5 seconds
    const checkConnectivity = () => {
      console.log('Checking connectivity...');
      fetch('/pages.json', {
        method: 'HEAD',
        cache: 'no-store',
        mode: 'no-cors'
      })
        .then(() => {
          setIsOnline(true);
          console.log('PWA Status: Online (via heartbeat)');
          syncPages();
        })
        .catch(() => {
          setIsOnline(false);
          console.log('PWA Status: Offline (via heartbeat)');
        });
    };

    // Listen for online/offline events
    const handleOnline = () => {
      setIsOnline(true);
      console.log('PWA Status: Online (via event)');
      // Sync when coming online
      syncPages();
    };
    const handleOffline = () => {
      setIsOnline(false);
      console.log('PWA Status: Offline (via event)');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Start heartbeat - check every 5 seconds
    const heartbeatInterval = setInterval(checkConnectivity, 5000);
    // Check once immediately
    checkConnectivity();

    // Load sync info from localStorage
    try {
      const savedInfo = localStorage.getItem('pwa-sync-info');
      if (savedInfo) {
        setSyncInfo(JSON.parse(savedInfo));
        console.log('Loaded sync info from localStorage:', savedInfo);
      }
    } catch (e) {
      console.error('Error loading sync info:', e);
    }

    // Trigger initial sync on component mount
    console.log('Component mounted, triggering initial sync...');
    syncPages();

    // Calculate cache size
    calculateCacheSize();

    // Listen for service worker messages and updates
    if ('serviceWorker' in navigator) {
      // Get service worker registration
      navigator.serviceWorker.ready.then((registration) => {
        setSwRegistration(registration);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing;
          newWorker.addEventListener('statechange', () => {
            if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
              setUpdateAvailable(true);
              console.log('New service worker available');
            }
          });
        });

        // Check if there's already an update waiting
        if (registration.waiting) {
          setUpdateAvailable(true);
        }
      });

      const messageHandler = (event) => {
        console.log('Received message from SW:', event.data);

        if (event.data && event.data.type === 'SYNC_UPDATED') {
          const newInfo = {
            lastSync: new Date().toISOString(),
            totalPages: event.data.totalPages || 0,
            lastPageSynced: event.data.lastPage || null,
            buildDate: event.data.buildDate || null,
          };
          setSyncInfo(newInfo);
          try {
            localStorage.setItem('pwa-sync-info', JSON.stringify(newInfo));
            console.log('Updated sync info:', newInfo);
          } catch (e) {
            console.error('Error saving sync info:', e);
          }
        }
      };

      navigator.serviceWorker.addEventListener('message', messageHandler);

      return () => {
        clearInterval(heartbeatInterval);
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
        navigator.serviceWorker.removeEventListener('message', messageHandler);
      };
    }

    return () => {
      clearInterval(heartbeatInterval);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (e) {
      return dateString;
    }
  };

  const badgeStyle = {
    position: 'fixed',
    top: '20px',
    left: '20px',
    zIndex: 9999,
    fontFamily: "'Courier New', monospace",
  };

  const buttonStyle = {
    width: isExpanded ? 'auto' : '48px',
    height: isExpanded ? 'auto' : '48px',
    borderRadius: isExpanded ? '8px' : '50%',
    border: `2px solid ${isOnline ? '#00ff88' : '#ff006e'}`,
    background: 'rgba(15, 20, 35, 0.95)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: isExpanded ? '12px' : '24px',
    transition: 'all 0.3s ease',
    boxShadow: `0 0 ${isExpanded ? '10px' : '20px'} ${isOnline ? 'rgba(0, 255, 136, 0.3)' : 'rgba(255, 0, 110, 0.3)'}`,
    padding: isExpanded ? '10px 15px' : '0',
    gap: isExpanded ? '8px' : '0',
  };

  const panelStyle = {
    position: 'absolute',
    top: '60px',
    left: '0',
    width: '320px',
    background: 'linear-gradient(135deg, rgba(10, 14, 39, 0.98), rgba(26, 31, 58, 0.98))',
    border: '2px solid #00ff88',
    borderRadius: '8px',
    boxShadow: '0 8px 32px rgba(0, 255, 136, 0.2), 0 0 20px rgba(0, 255, 136, 0.1)',
    overflow: 'hidden',
    animation: 'slideIn 0.3s ease',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px',
    borderBottom: '1px solid rgba(0, 255, 136, 0.3)',
    background: 'rgba(0, 255, 136, 0.05)',
  };

  const contentStyle = {
    padding: '15px',
    maxHeight: '400px',
    overflowY: 'auto',
  };

  const itemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '10px 0',
    borderBottom: '1px solid rgba(0, 255, 136, 0.1)',
    gap: '10px',
  };

  const labelStyle = {
    color: '#888',
    fontSize: '12px',
    fontWeight: 'bold',
    minWidth: '140px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  };

  const valueStyle = {
    color: '#d0d0d0',
    fontSize: '12px',
    textAlign: 'right',
    flex: 1,
    wordBreak: 'break-word',
  };

  const footerStyle = {
    padding: '10px 15px',
    borderTop: '1px solid rgba(0, 255, 136, 0.2)',
    background: 'rgba(0, 255, 136, 0.02)',
    textAlign: 'center',
    color: '#666',
    fontSize: '11px',
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div style={badgeStyle}>
        <button
          style={buttonStyle}
          onClick={() => setIsExpanded(!isExpanded)}
          title={isOnline ? 'Online' : 'Offline'}
        >
          <span style={{ fontSize: '16px' }}>
            {isOnline ? '🟢' : '🔴'}
          </span>
          {isExpanded && <span style={{ marginLeft: '8px' }}>PWA</span>}
        </button>

        {isExpanded && (
          <div style={panelStyle}>
            <div style={headerStyle}>
              <h3 style={{ margin: 0, color: '#00ff88', fontSize: '14px', fontWeight: 'bold', letterSpacing: '1px', textTransform: 'uppercase' }}>
                PWA Status
              </h3>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#00ff88',
                  cursor: 'pointer',
                  fontSize: '18px',
                  padding: '0',
                  width: '24px',
                  height: '24px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onClick={() => setIsExpanded(false)}
              >
                ✕
              </button>
            </div>

            <div style={contentStyle}>
              <div style={{ ...itemStyle, borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                <span style={labelStyle}>Estado:</span>
                <span style={{ ...valueStyle, color: isOnline ? '#00ff88' : '#ff006e', fontWeight: 'bold' }}>
                  {isOnline ? '🟢 Online' : '🔴 Offline'}
                </span>
              </div>

              <div style={{ ...itemStyle, borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                <span style={labelStyle}>Última Sync:</span>
                <span style={valueStyle}>
                  {syncInfo.lastSync ? formatDate(syncInfo.lastSync) : 'Nunca'}
                </span>
              </div>

              <div style={{ ...itemStyle, borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                <span style={labelStyle}>Páginas:</span>
                <span style={valueStyle}>{syncInfo.totalPages}</span>
              </div>

              <div style={{ ...itemStyle, borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                <span style={labelStyle}>Última Página:</span>
                <span style={valueStyle}>{syncInfo.lastPageSynced || 'N/A'}</span>
              </div>

              <div style={{ ...itemStyle, borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                <span style={labelStyle}>Build Date:</span>
                <span style={valueStyle}>
                  {syncInfo.buildDate ? formatDate(syncInfo.buildDate) : 'N/A'}
                </span>
              </div>

              <div style={{ ...itemStyle, borderBottom: '1px solid rgba(0, 255, 136, 0.1)' }}>
                <span style={labelStyle}>Tamaño Caché:</span>
                <span style={valueStyle}>{cacheSize}</span>
              </div>

              {updateAvailable && (
                <div style={{
                  ...itemStyle,
                  background: 'rgba(255, 215, 0, 0.1)',
                  padding: '10px',
                  borderRadius: '5px',
                  border: '1px solid rgba(255, 215, 0, 0.3)',
                  marginTop: '10px'
                }}>
                  <span style={{ ...labelStyle, color: '#ffd700' }}>¡Actualización Disponible!</span>
                </div>
              )}

              <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {updateAvailable && (
                  <button
                    onClick={updatePWA}
                    style={{
                      background: 'linear-gradient(135deg, #ffd700 0%, #ffb700 100%)',
                      color: '#0f0f1e',
                      border: 'none',
                      padding: '10px 15px',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    🔄 Actualizar Ahora
                  </button>
                )}
                <button
                  onClick={clearCache}
                  style={{
                    background: 'rgba(255, 0, 110, 0.1)',
                    color: '#ff006e',
                    border: '1px solid rgba(255, 0, 110, 0.3)',
                    padding: '10px 15px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease',
                  }}
                >
                  🗑️ Limpiar Caché
                </button>
              </div>
            </div>

            <div style={footerStyle}>
              <small>PWA v2.0 Enhanced</small>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default PWAStatusBadge;
