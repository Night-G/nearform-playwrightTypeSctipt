import {test} from "playwright/test";
import {RadioButtonPage} from "../../pages/radio-button.page";
import {expect} from "@playwright/test";

test.beforeEach(async ({ page }) => {
    await page.goto(process.env.URL);
    await page.locator("//div[text()='Radio Button']").click();
});

test('check radiobuttons',async ({page})=>{
    const radioButtonPage = new RadioButtonPage(page);

    await radioButtonPage.checkPrimaryBlue();
    await radioButtonPage.checkSecondaryGreen();
    await radioButtonPage.checkSecondaryPurple();

    await expect(radioButtonPage.secondaryGreenRadio).not.toBeChecked()
});