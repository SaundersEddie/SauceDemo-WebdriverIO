const loginPage = require ('../../pageobjects/loginPage');

describe("Testing Sub Folders in specs", async () => {
    it ("Lets just open the browser", async () => {
        await loginPage.open()
        let ourTitle = await browser.getTitle();
        expect(ourTitle).toContain('Swag');
        await loginPage.userName.setValue('standard_user');
        await loginPage.password.setValue('secret_sauce');
        await loginPage.loginButton.click();
        await browser.pause(10000);
    })
})