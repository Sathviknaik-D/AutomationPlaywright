import {test,expect} from "@playwright/test";

test.describe("Verify Page title", ()=>{
    test.beforeEach(" Navigate to URL ", async ({page})=>{ 
        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    });
    test("main Navigation", async ({ page }) => {
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });
});