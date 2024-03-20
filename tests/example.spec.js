import { test, expect } from "@playwright/test";

test("should display option when selecting input", async ({ page }) => {
    await page.goto("http://127.0.0.1:3000");
    await page.locator(".css-qbdosj-Input").click();
    await expect(page.locator("#react-select-3-option-0")).toContainText(
        "Greater London, GB"
    );
});
