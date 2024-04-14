import { Page, expect } from '@playwright/test';

async function checkIndividualValues(page: Page, food:any) {
  await expect(page.getByRole('cell', { name: food.description })).toBeVisible();
  await expect(page.getByRole('cell', { name: food.Kcal })).toBeVisible();
  await expect(page.getByRole('cell', { name: food.ProteinG })).toBeVisible();
  await expect(page.getByRole('cell', { name: food.FatG })).toBeVisible();
  await expect(page.getByRole('cell', { name: food.Carbs })).toBeVisible();
}
async function checkTotalValues(page: Page, food:any) {
  await expect(page.locator('#total-kcal')).toHaveText(food.Kcal);
  await expect(page.locator('#total-protein_g')).toHaveText(food.ProteinG);
  await expect(page.locator('#total-fat_g')).toHaveText(food.FatG);
  await expect(page.locator('#total-carbohydrate_g')).toHaveText(food.Carbs);
}

export { checkIndividualValues, checkTotalValues };
