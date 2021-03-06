const Page = require('./page');

class LoginPage extends Page {
    
    get username() {
        return $('#user-name');
    } 

    get password() {
        return $('#password');
    }


    get loginButton() {
        return $('#login-button');
    }

    async open() {
        await browser.maximizeWindow();
        return await super.openURL('https://www.saucedemo.com');
    }
    async testLogout() {
        return await super.logout();
    }
    
    async userLogin(ourUsername, ourPassword) {
        await this.username.setValue(ourUsername);
        await this.password.setValue(ourPassword);
        await this.loginButton.click();
    }
}

module.exports = new LoginPage();
