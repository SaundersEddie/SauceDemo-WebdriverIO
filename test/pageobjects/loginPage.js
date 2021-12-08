const Page = require('./page');

class LoginPage extends Page {
    
    get userName() {
        return $('#user-name');
    } 

    get password() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    open() {
        return super.openURL('https://www.saucedemo.com');
    }
}
module.exports = new LoginPage();
