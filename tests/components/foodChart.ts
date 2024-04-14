import { Page, expect } from '@playwright/test';

async function clean(page: Page) {
  await page.locator('i').nth(1).click();
}
async function select(page: Page, food:any) {
  await page.getByRole('cell', { name: food.description }).click();
}
async function search(page: Page, food:any) {
  const foodInput = page.getByPlaceholder('Search foods...');
  await foodInput.fill(food.description);
  await expect(foodInput).toHaveValue(food.description);
  await expect(page.getByRole('cell', { name: food.description })).toBeVisible();
}

export { search, select, clean };
