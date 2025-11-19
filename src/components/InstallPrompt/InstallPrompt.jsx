import { useState, useEffect } from 'react';
import './InstallPrompt.css';

function InstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
      return;
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      console.log('beforeinstallprompt event fired');
      // Prevent the default browser install prompt
      e.preventDefault();
      // Store the event for later use
      setDeferredPrompt(e);
      // Show our custom install prompt after 3 seconds
      setTimeout(() => {
        setShowPrompt(true);
      }, 3000);
    };

    // Listen for successful installation
    const handleAppInstalled = () => {
      console.log('PWA was installed');
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user's response
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to install prompt: ${outcome}`);

    if (outcome === 'accepted') {
      console.log('User accepted the install prompt');
    } else {
      console.log('User dismissed the install prompt');
    }

    // Clear the deferred prompt
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Remember dismissal for 7 days
    const dismissedUntil = Date.now() + (7 * 24 * 60 * 60 * 1000);
    localStorage.setItem('installPromptDismissed', dismissedUntil.toString());
  };

  // Don't show if installed, dismissed recently, or no prompt available
  if (isInstalled || !showPrompt || !deferredPrompt) {
    return null;
  }

  // Check if dismissed recently
  const dismissedUntil = localStorage.getItem('installPromptDismissed');
  if (dismissedUntil && Date.now() < parseInt(dismissedUntil)) {
    return null;
  }

  return (
    <div className="install-prompt-overlay">
      <div className="install-prompt">
        <button className="install-prompt-close" onClick={handleDismiss}>
          ✕
        </button>

        <div className="install-prompt-icon">📱</div>

        <h2 className="install-prompt-title">Instala Art Collection</h2>

        <p className="install-prompt-description">
          Accede rápidamente desde tu pantalla de inicio y disfruta de una experiencia completa sin conexión.
        </p>

        <div className="install-prompt-features">
          <div className="install-feature">
            <span className="feature-icon">⚡</span>
            <span>Acceso instantáneo</span>
          </div>
          <div className="install-feature">
            <span className="feature-icon">📡</span>
            <span>Funciona offline</span>
          </div>
          <div className="install-feature">
            <span className="feature-icon">💾</span>
            <span>Sin descargas pesadas</span>
          </div>
        </div>

        <div className="install-prompt-actions">
          <button className="install-button-primary" onClick={handleInstallClick}>
            Instalar Ahora
          </button>
          <button className="install-button-secondary" onClick={handleDismiss}>
            Más Tarde
          </button>
        </div>
      </div>
    </div>
  );
}

export default InstallPrompt;
