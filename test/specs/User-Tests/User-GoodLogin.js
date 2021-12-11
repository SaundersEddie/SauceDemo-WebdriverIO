const LoginPage = require ('../../pageobjects/loginPage');
const userCredentials = require('../../testData/loginData');

// console.log('****************************************');
// console.log(userCredentials.badUsername);

describe("Successful Login User Test", async () => {
    beforeEach (() => {
        LoginPage.open()
    })

    afterEach (() => {
        LoginPage.closeBrowser();
    })

    it ("Login with good username and password", async () => {

        for (const goodUsername of userCredentials.goodUsername) {
            // await browser.pause(10000)
            LoginPage.userLogin(goodUsername, userCredentials.goodPassword);
            // await browser.pause(10000)
            // This POM no longer works, but works outside of the class
            // Needs further evaluation and testing on other browers
            // LoginPage.testLogout();
            // Replacement code for above POM
            await LoginPage.menu.waitForExist({timeout: 5000});
            await LoginPage.menu.click();
            await LoginPage.menuLogout.waitForClickable({timeout: 3000});
            await LoginPage.menuLogout.click();
        };
    })
    
})