import { Page, expect } from '@playwright/test';

async function checkMainPage(page: Page) {
  await page.goto('http://localhost:3000/');
  await expect(page).toHaveTitle(/Food Lookup Demo/);
  await expect(page.getByRole('heading', { name: 'Selected foods' })).toBeVisible();
  await expect(page.getByPlaceholder('Search foods...')).toBeVisible();
}

export { checkMainPage };