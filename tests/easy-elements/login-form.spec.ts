import {test} from 'playwright/test'
import {LoginFormPage} from "../../pages/login-form.page";
import {expect} from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.URL);
    await page.locator("//div[text()='Login Form']").click();
});

test('login by on-site credentials', async ({page})=>{
    const loginPage = new LoginFormPage(page);
    const username:string = await loginPage.getUsername();
    await loginPage.fillUsernameField(username);
    const pwd:string = await loginPage.getPwd();
    await loginPage.fillPwdField(pwd);
    await loginPage.clickLoginButton();

    await expect(page.locator("//button[text()='Logout']")).toBeVisible();
});