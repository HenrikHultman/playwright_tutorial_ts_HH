import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login');
  await expect(page.getByText('XYZ Bank')).toBeVisible();
  await expect(page.locator('body')).toContainText('Bank Manager Login');
  await page.getByRole('button', { name: 'Bank Manager Login' }).click();
  await createCustomer(page);
  await deleteCustomer(page);
})

async function createCustomer(page:page) {
  await page.getByRole('button', { name: 'Add Customer' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Test');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Ta bort');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('Post Code').fill('12345');
  await page.getByPlaceholder('Post Code').press('Tab');
  await page.getByRole('form').getByRole('button', { name: 'Add Customer' }).click();
};
async function deleteCustomer(page:page) {
  await page.getByRole('button', { name: 'Customers' }).click();
  await expect(page.locator('tbody')).toContainText('Ta bort');
  await page.getByRole('row', { name: 'Test Ta bort 12345 Delete' }).getByRole('button').click();
}
