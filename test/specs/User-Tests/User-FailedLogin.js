
describe("Testing Sub Folders in specs", async () => {
    it ("Lets just open the browser", async () => {
        await browser.url('https://www.saucedemo.com');
        let ourTitle = await browser.getTitle();
        expect(ourTitle).toContain('Swag');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();
        await browser.pause(10000);
    })
})