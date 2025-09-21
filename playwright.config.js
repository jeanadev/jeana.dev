import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 6 : undefined, // More workers in CI
  reporter: 'line', // Faster reporter for CI
  timeout: 60000, // 60s timeout for thorough accessibility testing
  use: {
    baseURL: 'http://localhost:8080',
    trace: 'retain-on-failure', // Only trace on failure
    actionTimeout: 10000, // Faster action timeout
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  webServer: {
    command: 'npm run build && npm run serve',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 60000, // 1 minute to start server
  },
});