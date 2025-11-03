# Art Collection - Auto-Launch Setup Guide

## Overview
This guide explains how to set up automatic launching of the Art Collection PWA on system startup. The app will run as a background service and open in your browser automatically.

## Prerequisites
- macOS system
- Node.js or pnpm installed
- Project dependencies installed (`pnpm install`)

## Quick Setup

Run the auto-launch setup script:

```bash
cd /Users/bernardurizaorozco/Documents/artcollection
bash scripts/setup-autolaunch.sh
```

This will:
1. Create a LaunchAgent configuration file
2. Set up a launcher script
3. Enable automatic startup on system restart
4. Automatically open the app in your browser

## What Happens

### On System Startup:
1. macOS launches the LaunchAgent at login
2. The launcher script starts `pnpm dev`
3. After 3 seconds, it opens `http://localhost:8888` in your default browser
4. The PWA loads with cached assets (offline support)

### Service Worker:
- All assets are cached on first load
- If no internet connection, cached version is used
- Updates are checked every 60 seconds when online
- Background sync for any pending data

## Manual Commands

### Start the app manually:
```bash
pnpm dev
```

### View logs:
```bash
tail -f /tmp/artcollection.log
```

### Disable auto-launch:
```bash
launchctl unload ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

### Re-enable auto-launch:
```bash
launchctl load ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

### Check LaunchAgent status:
```bash
launchctl list | grep artcollection
```

## Offline Usage

The app is fully functional offline because:

1. **Service Worker** caches all static assets
2. **Workbox** precaches critical files
3. **IndexedDB** stores any dynamic data (if used)
4. **PWA Manifest** enables installable app

On first visit, all pages and assets are cached. Subsequent visits work without internet connection.

## Troubleshooting

### App doesn't start automatically
```bash
# Check if plist is loaded
launchctl list | grep artcollection

# If not loaded, try:
launchctl load ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

### Port 8888 already in use
Edit `vite.config.js` and change the port number, or kill the existing process:
```bash
lsof -i :8888
kill -9 <PID>
```

### Service Worker not caching
Open DevTools → Application → Service Workers to check status. Try:
1. Hard refresh (Cmd+Shift+R)
2. Clear cache: `Application → Storage → Clear site data`
3. Rebuild: `pnpm build`

### Too much memory usage
Reduce cache size in `public/sw.js`:
- Reduce `maximumFileSizeToCacheInBytes`
- Reduce `maxEntries` for runtime cache

## File Structure

```
artcollection/
├── scripts/
│   ├── setup-autolaunch.sh      # Setup script
│   └── launch-app.sh            # Created by setup script
├── public/
│   └── sw.js                    # Service Worker (offline caching)
├── src/
│   └── main.jsx                 # SW registration
├── vite.config.js               # PWA configuration
└── AUTOLAUNCH_SETUP.md          # This file
```

## Notes

- The app runs on `http://localhost:8888`
- Service Worker is registered in `src/main.jsx`
- Custom SW logic is in `public/sw.js`
- PWA config is in `vite.config.js`

## Security

This setup:
- ✓ Runs locally only (no external access)
- ✓ Uses service worker for offline-first security
- ✓ No private data transmitted to cloud
- ✓ LaunchAgent only for current user

## Advanced: Manual LaunchAgent Setup

If the script fails, you can create the plist manually:

```bash
mkdir -p ~/Library/LaunchAgents
nano ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

Add the XML content from `scripts/setup-autolaunch.sh` and then:
```bash
launchctl load ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

---

For more information on PWA and Service Workers, see [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
