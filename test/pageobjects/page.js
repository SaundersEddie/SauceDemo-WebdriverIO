module.exports = class Page {

    async openURL(pageURL) {
        return await browser.url(pageURL);
    }
}
