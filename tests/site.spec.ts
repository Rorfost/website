import { expect, test } from '@playwright/test';

const viewports = [
  { name: 'small phone', width: 320, height: 640 },
  { name: 'phone', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'laptop', width: 1024, height: 768 },
  { name: 'wide desktop', width: 1440, height: 900 },
];

test('homepage provides working primary navigation', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Rorfost/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  await expect(
    page.getByRole('link', { name: /visit github/i }).first(),
  ).toHaveAttribute('href', 'https://github.com/rorfost');
});

test('mobile navigation can be opened with the keyboard', async ({ page }) => {
  await page.goto('/');
  await page.setViewportSize({ width: 375, height: 667 });
  const menu = page.getByRole('button', { name: /toggle navigation/i });
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('link', { name: 'Contact' })).toBeVisible();
});

test('homepage fits every supported viewport without horizontal overflow', async ({
  page,
}) => {
  for (const viewport of viewports) {
    await page.setViewportSize(viewport);
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
    const fitsViewport = await page
      .locator('html')
      .evaluate((element) => element.scrollWidth <= window.innerWidth);
    expect(fitsViewport).toBe(true);
  }
});

test('the built 404 page is available', async ({ page }) => {
  await page.goto('/404.html');
  await expect(
    page.getByRole('heading', { name: 'This page is not here.' }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Return home' })).toHaveAttribute(
    'href',
    '/',
  );
});
