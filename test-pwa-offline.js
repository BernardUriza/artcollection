#!/usr/bin/env node

/**
 * PWA Offline Testing Script
 * This script tests whether the PWA loads correctly when the dev server is offline
 *
 * Instructions:
 * 1. Run this script (it starts a test server on port 3000)
 * 2. The script will:
 *    - Serve a test page that opens your app in an iframe
 *    - Allow you to manually go offline in DevTools Network tab
 *    - Allow you to verify the app still loads offline
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const testHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PWA Offline Test</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      font-family: Arial, sans-serif;
      background: #0f0f1e;
      color: #d0d0d0;
      padding: 20px;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #00ff88;
      margin-bottom: 20px;
      text-align: center;
    }
    .instructions {
      background: rgba(0, 255, 136, 0.1);
      border: 2px solid #00ff88;
      border-radius: 8px;
      padding: 20px;
      margin-bottom: 20px;
      font-size: 14px;
      line-height: 1.6;
    }
    .instructions h2 {
      color: #00ff88;
      margin-bottom: 10px;
      font-size: 16px;
    }
    .instructions ol {
      margin-left: 20px;
    }
    .instructions li {
      margin-bottom: 8px;
    }
    .instructions code {
      background: rgba(0, 0, 0, 0.5);
      padding: 2px 6px;
      border-radius: 3px;
      font-family: monospace;
    }
    .test-container {
      display: flex;
      gap: 20px;
      min-height: 600px;
    }
    .sidebar {
      width: 300px;
      background: rgba(20, 20, 40, 0.8);
      border: 2px solid #00ff88;
      border-radius: 8px;
      padding: 15px;
      overflow-y: auto;
    }
    .sidebar h3 {
      color: #00ff88;
      margin-bottom: 10px;
      font-size: 14px;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    .status {
      margin-bottom: 20px;
    }
    .status-item {
      background: rgba(0, 0, 0, 0.3);
      padding: 10px;
      border-radius: 4px;
      margin-bottom: 10px;
      font-size: 12px;
    }
    .status-label {
      color: #888;
      font-weight: bold;
    }
    .status-value {
      color: #d0d0d0;
      margin-top: 3px;
      font-family: monospace;
    }
    .status-value.online {
      color: #00ff88;
    }
    .status-value.offline {
      color: #ff006e;
    }
    iframe {
      flex: 1;
      border: 2px solid #00ff88;
      border-radius: 8px;
      background: white;
    }
    .controls {
      margin-top: 15px;
      padding-top: 15px;
      border-top: 1px solid rgba(0, 255, 136, 0.2);
    }
    .controls button {
      width: 100%;
      padding: 8px;
      margin-bottom: 8px;
      background: #00ff88;
      color: #0f0f1e;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
      font-size: 12px;
    }
    .controls button:hover {
      background: #00dd77;
    }
    .log {
      background: rgba(0, 0, 0, 0.5);
      padding: 10px;
      border-radius: 4px;
      max-height: 150px;
      overflow-y: auto;
      font-size: 11px;
      font-family: monospace;
      color: #888;
    }
    .log-entry {
      margin-bottom: 3px;
      padding: 2px 0;
    }
    .log-entry.info { color: #00ff88; }
    .log-entry.error { color: #ff006e; }
    .log-entry.warn { color: #ffaa00; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🔌 PWA Offline Test Center</h1>

    <div class="instructions">
      <h2>Test Instructions:</h2>
      <ol>
        <li>The app loads in the iframe on the right (it's at http://localhost:8850)</li>
        <li>Let the page load completely and the Service Worker register</li>
        <li>Watch the "Service Worker Status" panel on the left to see cache operations</li>
        <li><strong>To simulate offline:</strong>
          <ul style="margin-top: 5px; margin-left: 20px;">
            <li>Open DevTools (F12)</li>
            <li>Go to Network tab</li>
            <li>Check "Offline" checkbox</li>
            <li>Hard refresh (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)</li>
          </ul>
        </li>
        <li><strong>Expected result:</strong> The app should load from Service Worker cache even though the server is offline</li>
        <li><strong>Success indicator:</strong> You should see the app render normally, and the PWA Status Badge should show 🔴 Offline</li>
      </ol>
    </div>

    <div class="test-container">
      <div class="sidebar">
        <div class="status">
          <h3>📊 Service Worker Status</h3>
          <div class="status-item">
            <div class="status-label">Server Status:</div>
            <div class="status-value" id="serverStatus">Checking...</div>
          </div>
          <div class="status-item">
            <div class="status-label">Service Worker:</div>
            <div class="status-value" id="swStatus">Not detected</div>
          </div>
          <div class="status-item">
            <div class="status-label">Cache Name:</div>
            <div class="status-value" id="cacheName">Checking...</div>
          </div>
        </div>

        <div class="controls">
          <button onclick="checkCaches()">🔍 Check Caches</button>
          <button onclick="clearCaches()">🗑️ Clear All Caches</button>
          <button onclick="reloadApp()">🔄 Reload App</button>
        </div>

        <div style="margin-top: 15px;">
          <h3>📝 Event Log</h3>
          <div class="log" id="eventLog"></div>
        </div>
      </div>

      <iframe id="appFrame" src="http://localhost:8850/"></iframe>
    </div>
  </div>

  <script>
    let logEntries = [];

    function log(message, type = 'info') {
      const timestamp = new Date().toLocaleTimeString();
      const entry = \`[\${timestamp}] \${message}\`;
      logEntries.unshift(entry);
      if (logEntries.length > 30) logEntries.pop();

      const logDiv = document.getElementById('eventLog');
      logDiv.innerHTML = logEntries
        .map(e => \`<div class="log-entry \${type}">\${e}</div>\`)
        .join('');
    }

    async function checkServerStatus() {
      try {
        const response = await fetch('http://localhost:8850/pages.json', {
          method: 'HEAD',
          mode: 'no-cors'
        });
        document.getElementById('serverStatus').textContent = '✅ Online (port 8850)';
        document.getElementById('serverStatus').className = 'status-value online';
        log('Server is online and responding', 'info');
      } catch (e) {
        document.getElementById('serverStatus').textContent = '❌ Offline (port 8850)';
        document.getElementById('serverStatus').className = 'status-value offline';
        log('Server is offline', 'warn');
      }
    }

    async function checkServiceWorker() {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        if (registrations.length > 0) {
          document.getElementById('swStatus').textContent = '✅ Registered';
          document.getElementById('swStatus').className = 'status-value online';
          log('Service Worker is registered', 'info');

          // Try to get cache info
          if ('caches' in window) {
            const cacheNames = await caches.keys();
            const artCollectionCaches = cacheNames.filter(name => name.includes('artcollection'));
            if (artCollectionCaches.length > 0) {
              document.getElementById('cacheName').textContent = artCollectionCaches.join(', ');
              log('Found caches: ' + artCollectionCaches.join(', '), 'info');
            }
          }
        } else {
          document.getElementById('swStatus').textContent = '⏳ Not registered yet';
          log('Service Worker not yet registered', 'warn');
        }
      }
    }

    async function checkCaches() {
      try {
        const cacheNames = await caches.keys();
        log('Cache Storage: ' + (cacheNames.length > 0 ? cacheNames.join(', ') : 'empty'), 'info');

        for (const cacheName of cacheNames) {
          const cache = await caches.open(cacheName);
          const requests = await cache.keys();
          log(\`  \${cacheName}: \${requests.length} items\`, 'info');
          if (cacheName.includes('artcollection')) {
            for (const req of requests.slice(0, 5)) {
              log(\`    - \${req.url}\`, 'info');
            }
          }
        }
      } catch (e) {
        log('Error checking caches: ' + e.message, 'error');
      }
    }

    async function clearCaches() {
      try {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
        log('Cleared all caches', 'info');
        setTimeout(() => location.reload(), 500);
      } catch (e) {
        log('Error clearing caches: ' + e.message, 'error');
      }
    }

    function reloadApp() {
      document.getElementById('appFrame').src = 'about:blank';
      setTimeout(() => {
        document.getElementById('appFrame').src = 'http://localhost:8850/';
        log('App reloaded', 'info');
      }, 500);
    }

    // Listen to Service Worker messages from the iframe
    window.addEventListener('message', (event) => {
      if (event.data.type === 'SW_LOG') {
        log(event.data.message, event.data.level || 'info');
      }
    });

    // Initial checks
    log('Test center loaded', 'info');
    checkServerStatus();
    checkServiceWorker();

    // Check periodically
    setInterval(checkServerStatus, 5000);
    setInterval(checkServiceWorker, 10000);
  </script>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(testHTML);
});

server.listen(PORT, () => {
  console.log(`\n🧪 PWA Offline Test Server running at http://localhost:${PORT}\n`);
  console.log('Instructions:');
  console.log('1. Open http://localhost:3000 in your browser');
  console.log('2. Make sure http://localhost:8850 (dev server) is running');
  console.log('3. Follow the on-screen instructions to test offline mode\n');
});
