const loginPage = require('../../pageobjects/loginPage');
const LoginPage = require ('../../pageobjects/loginPage');

describe("Testing Sub Folders in specs", async () => {
    beforeEach (() => {
        LoginPage.open()
    })

    it ("Login with good user credentials to test", async () => {
        LoginPage.userLogin('standard_user', 'secret_sauce');
        await LoginPage.menu.click();
        await LoginPage.menuLogout.waitForClickable({timeout: 3000});
        await LoginPage.menuLogout.click();
        // This POM no longer works, but works outside of the class
        // Needs further evaluation and testing on other browers
        // LoginPage.logout();
        await browser.pause(5000);
    })
    
    xit ("Loop though users and attemp login", async () => {
        console.log ("Opening Loop test")
        await browser.pause(5000);
    })

})