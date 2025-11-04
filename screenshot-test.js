import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function takeScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 }
  });

  const screenshotsDir = path.join(__dirname, 'screenshots');
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  // Test all pages
  const pages = [
    { name: 'home', path: '/' },
    { name: 'forensic-exam', path: '/page/a3f8e9d2-7b4c-11ef-9cf0-0242ac120002' },
    { name: 'language-workshop', path: '/page/29f32e2c-0521-4ffe-9f97-662885330037' },
    { name: 'development-presentation', path: '/page/10cc9090-fc11-4ca1-b464-f902158d41df' },
    { name: 'tony-one-on-one', path: '/page/22b39bb7-2ba4-41bb-9011-ba5171415bf6' },
    { name: 'aurity-deck', path: '/page/a051cfca-7950-45bb-aab9-488204659b21' },
    { name: 'fi-cold', path: '/page/c4739fcd-3663-4a64-b7bd-72ac17cf5020' },
    { name: 'fi-bioml', path: '/page/b20f354b-e6b1-4fa3-ba19-7b4a3317f7a2' }
  ];

  for (const pageInfo of pages) {
    try {
      console.log(`Taking screenshot of ${pageInfo.name}...`);
      await page.goto(`http://localhost:8850${pageInfo.path}`, { waitUntil: 'networkidle' });

      // Wait for content to render
      await page.waitForTimeout(1000);

      // Take screenshot
      await page.screenshot({
        path: path.join(screenshotsDir, `${pageInfo.name}.png`),
        fullPage: true
      });
      console.log(`✓ Screenshot saved: ${pageInfo.name}.png`);
    } catch (error) {
      console.error(`✗ Error screenshotting ${pageInfo.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\nAll screenshots saved to ./screenshots/');
}

takeScreenshots().catch(console.error);
