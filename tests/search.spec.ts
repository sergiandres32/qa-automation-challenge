import { test } from '@playwright/test';
import * as mainPage from './components/utils/main.ts';
import * as foodChart from './components/foodChart.ts';


const { food1 } = require('./data/food.ts');

test('Search food', async ({ page }) => {
  await test.step('Check main page', async () => {
    await mainPage.checkMainPage(page);
  });
  await test.step('Search food', async () => {
    await foodChart.search(page, food1);
  });
  await test.step('Select food', async () => {
    await foodChart.select(page, food1);
  });
});
