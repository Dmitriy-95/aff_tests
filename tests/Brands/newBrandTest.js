module.exports = {
    'add new brand test': function (browser) {
        browser.page.loginPage()
            .navigate()
            .logIn('manager@test.com', 'Aa1234');

        browser.page.basePage()
            .assert.visible('#logo')
            .section('@menu').click('@brands');

        browser.page.brands.brandPage()
            .assert.visible('@title')
            .assert.containsText('@title', 'Brands')
            .addBrand();
    }
};