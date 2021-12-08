const LoginPage = require ('../../pageobjects/loginPage');

describe("Testing Sub Folders in specs", async () => {
    it ("Lets just open the browser", async () => {
        LoginPage.open()
        LoginPage.userLogin('standard_user', 'secret_sauce');
        await browser.pause(5000);
    })
})