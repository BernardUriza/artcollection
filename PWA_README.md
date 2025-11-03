# Art Collection - PWA & Offline Setup

## What's Been Done

Your Art Collection is now a **Progressive Web App (PWA)** with full offline support and auto-launch on system restart.

### 1. ✅ Page Access Fixed
- Added **FIBioML page** to the landing page
- Now all 7 pages are accessible from the home page:
  - Examen Forense
  - Taller de Lenguaje
  - Development Presentation
  - Tony 1:1 Discussion
  - AURITY · FI-core Deck
  - Free Intelligence Cold
  - **FI-core + BioML** (new)

### 2. ✅ Offline-First PWA
The app now works **completely offline** with intelligent caching:

- **Service Worker** (`public/sw.js`) - Manages caching
- **Workbox Integration** - Automatic asset precaching
- **Offline-first strategy** - Serve cached content first, fall back to network

#### How it works:
1. First visit: All assets cached automatically
2. No internet: App loads from cache
3. Online: Service Worker checks for updates every 60 seconds
4. Background sync ready for future features

### 3. ✅ Auto-Launch on Restart
The app starts automatically when you restart your Mac:

#### Quick Setup (Run Once):
```bash
bash /Users/bernardurizaorozco/Documents/artcollection/scripts/setup-autolaunch.sh
```

#### What happens after restart:
1. LaunchAgent starts `pnpm dev` automatically
2. App opens at `http://localhost:8888`
3. All cached pages load instantly
4. Service Worker keeps it running offline

### 4. ✅ Testing & Verification
Test the PWA locally:
```
http://localhost:8888/offline-test.html
```

This page shows:
- Service Worker status
- Network connectivity
- Cached assets list
- Tools to test offline mode

---

## File Structure

```
artcollection/
├── public/
│   ├── sw.js                    ← Service Worker (offline caching)
│   └── offline-test.html        ← PWA testing page
├── src/
│   ├── main.jsx                 ← Service Worker registration
│   ├── data/pages.js            ← Page metadata (includes FIBioML)
│   └── pages/
│       ├── Home.jsx
│       ├── ForensicExam.jsx
│       ├── LanguageWorkshop.jsx
│       ├── DevelopmentPresentation.jsx
│       ├── TonyOneOnOne.jsx
│       ├── AurityDeck.jsx
│       ├── FICold.jsx
│       └── FIBioML.jsx          ← New page
├── scripts/
│   └── setup-autolaunch.sh      ← Auto-launch setup
├── vite.config.js               ← PWA config (Workbox)
├── index.html                   ← PWA manifest
├── AUTOLAUNCH_SETUP.md          ← Auto-launch guide
└── PWA_README.md                ← This file
```

---

## How to Use

### First Time Setup
1. Build the app:
   ```bash
   cd /Users/bernardurizaorozco/Documents/artcollection
   pnpm install
   pnpm build
   ```

2. (Optional) Enable auto-launch:
   ```bash
   bash scripts/setup-autolaunch.sh
   ```

3. Start the dev server:
   ```bash
   pnpm dev
   ```

### Daily Usage
- App opens automatically on system startup
- All pages are cached and work offline
- Browse freely without internet

### Testing Offline Mode
1. Open DevTools (F12)
2. Go to **Application → Service Workers**
3. Check "Offline"
4. Try navigating between pages - they all work!

Or visit the test page: `http://localhost:8888/offline-test.html`

---

## Configuration Details

### Service Worker (`public/sw.js`)
- **Install**: Precaches essential files
- **Activate**: Cleans old caches
- **Fetch**: Offline-first strategy
  - Checks cache first
  - Falls back to network
  - Caches successful responses
  - Returns cached backup if offline

### PWA Config (`vite.config.js`)
- **Workbox**: Automatic precaching of all `js`, `css`, `html`, `png`, `svg`
- **Max file size**: 5MB per asset
- **Cache policy**: Store and update
- **Runtime caching**: Google Fonts (1 year), CDNs (30 days)

### Auto-Launch (`scripts/setup-autolaunch.sh`)
- Creates LaunchAgent plist file
- Runs `pnpm dev` on startup
- Opens browser at `http://localhost:8888`
- Logs to `/tmp/artcollection.log`

---

## Advanced Features

### Update Service Worker
The Service Worker checks for updates every 60 seconds. To force update:
```javascript
// In browser console
navigator.serviceWorker.ready.then(reg => {
  reg.update();
});
```

### Clear Cache
Clear all cached data:
```bash
# Option 1: Via DevTools
# Application → Storage → Clear site data

# Option 2: Via script
bash
curl http://localhost:8888/offline-test.html
# Click "Clear Cache" button
```

### Disable Auto-Launch
```bash
launchctl unload ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

### View Logs
```bash
tail -f /tmp/artcollection.log
```

---

## Troubleshooting

### Service Worker not registering
1. Hard refresh: **Cmd+Shift+R**
2. Check DevTools → Application → Service Workers
3. Check browser console for errors

### App not launching on startup
```bash
# Check if LaunchAgent is loaded
launchctl list | grep artcollection

# If not, reload it
launchctl load ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

### Port 8888 in use
```bash
# Find process using port 8888
lsof -i :8888

# Kill it
kill -9 <PID>
```

### Too much cache/memory
Edit `public/sw.js` and reduce:
- `maximumFileSizeToCacheInBytes`
- `maxEntries` in runtime cache

---

## Browser Support

✅ **Chrome/Edge**: Full support
✅ **Firefox**: Full support
✅ **Safari**: Basic support (iOS 11.3+)
✅ **Mobile browsers**: Full PWA support

---

## Security Notes

- ✅ Runs locally only (no external access)
- ✅ All data stays on your machine
- ✅ HTTPS recommended for production
- ✅ No telemetry or tracking
- ✅ Offline-first means no cloud dependency

---

## What's Next?

- [ ] Custom offline page (offline.html)
- [ ] Background sync for data
- [ ] Install prompt for app stores
- [ ] Periodic cache updates
- [ ] Push notifications

---

## Resources

- [PWA Basics](https://web.dev/progressive-web-apps/)
- [Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)
- [Workbox](https://developers.google.com/web/tools/workbox/)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)

---

**Last Updated**: 2025-11-03
**PWA Status**: ✅ Ready for offline use
**Auto-Launch**: ✅ Ready for setup
