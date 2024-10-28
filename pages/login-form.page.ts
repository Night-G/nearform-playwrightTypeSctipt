import {Locator, Page} from "@playwright/test";

export class LoginFormPage {
    private page: Page;
    private usernameField: Locator;
    private pwdField: Locator;
    private loginButton: Locator ;

    constructor(page:Page) {
        this.page=page;
        this.usernameField = page.locator("//fieldset[.//span[text()='Username']]/preceding-sibling::input");
        this.pwdField = page.locator('//fieldset[.//span[text()=\'Password\']]/preceding-sibling::input');
        this.loginButton = page.locator('//button[text()=\'Login\']');
    }

    async getUsername(){
        return await this.page.locator("//p/strong[1]").textContent();
    }

    async getPwd(){
        return await this.page.locator("//p/strong[2]").textContent();
    }

    async fillUsernameField(username: string){
        await this.usernameField.fill(username);
    }

    async fillPwdField(pwd: string){
        await this.pwdField.fill(pwd);
    }

    async clickLoginButton(){
        await this.loginButton.click();
    }
}