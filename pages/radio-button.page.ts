import {Locator, Page} from "@playwright/test";

export class RadioButtonPage{
    private page: Page;
    primaryBlueRadio:Locator;

    secondaryPurpleRadio:Locator;
    secondaryGreenRadio:Locator;

    constructor(page:Page) {
        this.page=page;
        this.primaryBlueRadio = page.locator("//input[@value='Blue' and @type='radio']")
        this.secondaryPurpleRadio = this.page.locator("//input[@value='purple' and @type='radio']")
        this.secondaryGreenRadio = this.page.locator("//input[@value='green' and @type='radio']")
    }

    async checkPrimaryBlue(){
        await this.primaryBlueRadio.check()
    }

    async checkSecondaryPurple(){
        await this.secondaryPurpleRadio.check()
    }
    async checkSecondaryGreen(){
        await this.secondaryGreenRadio.check()
    }
}