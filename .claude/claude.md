# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Art Collection** project built with React + Vite - a UUID-based SPA showcasing experimental content pages. Each page is identified by a unique UUID and displays professional presentations, technical documentation, or experimental content.

## Architecture

### Page Routing System
- **UUID-based routing**: Each page has a unique UUID that serves as its route path (`/page/{uuid}`)
- **Central metadata**: All page metadata lives in `src/data/pages.js` - this is the source of truth for page titles, descriptions, and UUIDs
- **Automatic categorization**: Home page (`src/pages/Home.jsx`) automatically categorizes pages based on keywords in titles/descriptions into:
  - Professional Development
  - Technical Projects
  - Wellness & Nutrition
  - Experimental
- **Route registration**: Each new page must be manually registered in `src/App.jsx` as a Route component

### Adding New Pages Workflow

1. Generate UUID: `uuidgen` (lowercase the output)
2. Create component: `src/pages/{PageName}.jsx`
3. Create styles: `src/pages/{PageName}.css`
4. Add metadata to `src/data/pages.js`:
   ```js
   {
     uuid: 'your-generated-uuid',
     title: 'Page Title',
     description: 'Page description for landing page'
   }
   ```
5. Add route to `src/App.jsx`:
   ```jsx
   import PageName from './pages/PageName';
   // ... in Routes:
   <Route path="/page/your-uuid" element={<PageName />} />
   ```
6. Update `public/pages.json` (copy from `src/data/pages.js` - this is used by PWA)

**IMPORTANT**: The Home page will automatically pick up new pages from `src/data/pages.js` and categorize them based on keywords. No manual landing page updates needed.

### PWA Architecture
- **Service Worker**: `public/sw.js` handles offline-first caching
- **Workbox**: Production builds use VitePWA plugin for automated asset precaching (configured in `vite.config.js`)
- **Dual-mode SW**: Development uses custom SW (`public/sw.js`), production uses Workbox-generated SW
- **Update strategy**: SW checks for updates every 60 seconds when online
- **PWA Status Badge**: `src/components/PWAStatusBadge/PWAStatusBadge.jsx` shows online/offline status

### Development Ports
- Dev server: `http://localhost:8850` (opens automatically on `pnpm dev`)
- Preview server: `http://localhost:8851` (for testing production builds)

## Common Commands

```bash
# Development
pnpm dev              # Start dev server (port 8850, auto-opens browser)

# Production
pnpm build            # Build for production (includes Workbox SW generation)
pnpm preview          # Preview production build (port 8851)

# Generate UUID for new page
uuidgen | tr '[:upper:]' '[:lower:]'

# Testing
node screenshot-test.js     # Automated screenshot testing (Playwright)
node test-pwa-offline.js    # Test PWA offline functionality
```

## HTML to React Transformation

When the user provides HTML content, automatically transform it into React components:

1. Convert `class` → `className`, inline styles to objects, camelCase CSS properties
2. Create functional component with proper JSX
3. Extract large style blocks to separate `.css` file
4. Use PascalCase for component filenames
5. Keep components pure and focused

## Trello CLI Integration

**All card movements must use Trello CLI v2.2.0 with Claude AI analysis:**

```bash
trello quick-start <card_id>    # Start work + automatic analysis
trello quick-test <card_id>     # Move to testing + analysis
trello quick-done <card_id>     # Complete + analysis
```

## Code Style

- Functional components with hooks (React 19)
- Use `lucide-react` for icons
- Tailwind CSS v4 + PostCSS configured (though most components use plain CSS)
- React Router DOM v7 for navigation
