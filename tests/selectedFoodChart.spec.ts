import { test } from '@playwright/test';
import * as mainPage from './components/utils/main.ts';
import * as foodChart from './components/foodChart.ts';
import * as selectedFoodChart from './components/selectedFoodChart.ts';

const { food1, food2, total } = require('./data/food.ts');

test('Check that the selected food is in the chart', async ({ page }) => {
  await test.step('Check main page', async () => {
    await mainPage.checkMainPage(page);
  });
  await test.step('Pick food', async () => {
    await foodChart.search(page, food1);
    await foodChart.select(page, food1);
    await foodChart.search(page, food2);
    await foodChart.select(page, food2);
    await foodChart.clean(page);
  });
  await test.step('Check individual values', async () => {
    // Se podría iterar sobre cada alimento si necesitáramos comprobar la integridad de varios conjuntos de datos. 
	// Dado que solo compruebo 2 para ver si se suman correctamente, en este caso, es complicar innecesariamente la legibilidad de la prueba
    await selectedFoodChart.checkIndividualValues(page, food1);
    await selectedFoodChart.checkIndividualValues(page, food2);
  });
  await test.step('Check total values', async () => {
    await selectedFoodChart.checkTotalValues(page, total);
  });
});
