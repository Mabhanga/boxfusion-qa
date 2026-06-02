import { test, expect } from '@playwright/test';

test('Find A Job link on Experienced Hires page returns 404', async ({ page }) => {
  // Navigate to homepage
  await page.goto('https://boxfusion.io/');

  // Go directly to the Experienced Hires/Careers page
  await page.goto('https://boxfusion.io/careers/');

  // Click "Find A Job" - opens in a new tab
  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Find A Job' }).click();
  const popup = await popupPromise;

  // Wait for the popup to fully load
  await popup.waitForLoadState();

  // Assert the 404 heading is visible
  await expect(popup.getByRole('heading', { name: '404' })).toBeVisible();

  // Assert the error message is visible
  await expect(popup.getByRole('heading', { name: 'The page you requested was not found' })).toBeVisible();
});