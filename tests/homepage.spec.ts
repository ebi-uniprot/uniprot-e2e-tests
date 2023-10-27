import { test, expect } from "@playwright/test";

test("homepage has title", async ({ page }) => {
  await page.goto("https://www.uniprot.org/");
  await expect(page).toHaveTitle("UniProt");
});
