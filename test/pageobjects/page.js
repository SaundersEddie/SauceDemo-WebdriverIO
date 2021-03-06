module.exports = class Page {

    get menu() {
        return $("//button[@id='react-burger-menu-btn']");
    }

    get menuLogout() {
        return $("//a[@id='logout_sidebar_link']");
    }

    async openURL(pageURL) {
        return await browser.url(pageURL);
    }

    async openMenu() {
        await this.menu.waitForClickable({timeout: 3000});
        await this.menu.click();
    }

    async logout() {
        await this.menu.click();
        await this.menuLogout.waitForClickable({timeout: 3000});
        await this.menuLogout.click();
        return
    }
    async closeBrowser() {
        return browser.closeWindow();
    }
}
