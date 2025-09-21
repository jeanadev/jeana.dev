import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import fs from 'fs';
import xml2js from 'xml2js';
import { URL } from 'url';

// Function to read URLs from sitemap.xml
async function getUrlsFromSitemap() {
  try {
    const sitemapPath = './_site/sitemap.xml';
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const parser = new xml2js.Parser();
    const result = await parser.parseStringPromise(sitemapContent);
    
    const urls = result.urlset.url.map(urlObj => {
      const fullUrl = urlObj.loc[0];
      const urlPath = new URL(fullUrl).pathname;
      return urlPath;
    });
    
    return urls;
  } catch (error) {
    console.error('Error reading sitemap:', error);
    // Fallback to hardcoded URLs if sitemap reading fails
    return [
      '/',
      '/contact/',
      '/logos/', 
      '/print/',
      '/speaking/',
      '/web/'
    ];
  }
}

// Get URLs synchronously for test generation
let urls = [];

test.describe('WCAG 2.2 Accessibility Tests', () => {
  test.beforeAll(async () => {
    urls = await getUrlsFromSitemap();
    console.log('Testing URLs from sitemap:', urls);
  });

  // Generate a test for each URL - runs in parallel
  test('should not have accessibility violations on any page', async ({ page }) => {
    // Ensure URLs are loaded
    if (urls.length === 0) {
      urls = await getUrlsFromSitemap();
    }

    for (const url of urls) {
      console.log(`Testing ${url}`);
      await page.goto(`http://localhost:8080${url}`);
      
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags([
          'wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', // WCAG compliance
          'best-practice' // Axe best practice rules
        ])
        .analyze();

      expect(accessibilityScanResults.violations, 
        `Accessibility violations found on ${url}`).toEqual([]);
    }
  });
});