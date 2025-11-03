# Art Collection - Quick Start Guide

## What Changed?

✅ **All 7 pages are now accessible from the landing page**
✅ **PWA works completely offline**
✅ **Auto-launches on system restart (if you set it up)**

---

## Quick Setup (Choose One)

### Option 1: Start the Dev Server (Recommended)
```bash
cd /Users/bernardurizaorozco/Documents/artcollection
pnpm dev
```
Then open: `http://localhost:8888`

### Option 2: Enable Auto-Launch (Run Once)
```bash
bash /Users/bernardurizaorozco/Documents/artcollection/scripts/setup-autolaunch.sh
```
Then restart your Mac - app will open automatically!

---

## What You Can Do Now

### 1. Browse All Pages
- Visit the home page at `http://localhost:8888`
- See all 7 pages listed (including the new **FI-core + BioML** page)
- Click any page to view it

### 2. Work Offline
- All pages are cached automatically on first visit
- Unplug internet and pages still work
- Service Worker manages this automatically

### 3. Test PWA
- Open: `http://localhost:8888/offline-test.html`
- Check Service Worker status
- View cached assets
- Test offline mode

### 4. Auto-Launch on Restart (Optional)
Run once:
```bash
bash scripts/setup-autolaunch.sh
```
After restart, app opens automatically at `http://localhost:8888`

---

## File Locations

| What | Where |
|------|-------|
| Home/Landing | `http://localhost:8888/` |
| Offline Test | `http://localhost:8888/offline-test.html` |
| FIBioML Page | `/page/b20f354b-e6b1-4fa3-ba19-7b4a3317f7a2` |
| Service Worker | `public/sw.js` |
| PWA Config | `vite.config.js` |
| Auto-launch Script | `scripts/setup-autolaunch.sh` |
| Full PWA Docs | `PWA_README.md` |
| Auto-launch Docs | `AUTOLAUNCH_SETUP.md` |

---

## Key Features

### ✅ Service Worker
- Automatically caches all assets
- Offline-first strategy
- Updates every 60 seconds when online
- Located in `public/sw.js`

### ✅ Workbox Integration
- Precaches static assets on build
- Runtime caching for fonts and CDNs
- Smart invalidation strategies
- Configured in `vite.config.js`

### ✅ LaunchAgent (macOS)
- Runs `pnpm dev` on system startup
- Opens browser automatically
- Logs to `/tmp/artcollection.log`
- Setup via `scripts/setup-autolaunch.sh`

---

## Troubleshooting

### "Port 8888 already in use"
```bash
lsof -i :8888
kill -9 <PID>
```

### "Service Worker not working"
- Hard refresh: **Cmd+Shift+R**
- Check DevTools → Application → Service Workers
- Check console for errors

### "App doesn't launch on restart"
```bash
launchctl list | grep artcollection
# If not listed, run setup again:
bash scripts/setup-autolaunch.sh
```

### "Want to disable auto-launch"
```bash
launchctl unload ~/Library/LaunchAgents/com.artcollection.launcher.plist
```

---

## Commands Reference

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Setup auto-launch
bash scripts/setup-autolaunch.sh

# View app logs
tail -f /tmp/artcollection.log

# Check auto-launch status
launchctl list | grep artcollection
```

---

## Next Steps

1. **Start the app**: `pnpm dev`
2. **Browse pages**: Go to `http://localhost:8888`
3. **Test offline**: Open `http://localhost:8888/offline-test.html`
4. **Optional - Auto-launch**: Run `bash scripts/setup-autolaunch.sh`

---

## Documentation

- **PWA Details**: Read `PWA_README.md`
- **Auto-Launch Setup**: Read `AUTOLAUNCH_SETUP.md`
- **FIBioML Page**: Visit `/page/b20f354b-e6b1-4fa3-ba19-7b4a3317f7a2`

---

**Ready?** Start with: `pnpm dev`
