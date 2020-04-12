module.exports = {
  'menu test': function (browser) {
    let basePage = browser.page.basePage();
    let detailsPage = browser.page.affiliates.detailsPage();

    browser.page.loginPage()
      .navigate()
      .logIn('manager@test.com', 'Aa1234');

    basePage
      .assert.visible('#logo');

    basePage.section.menu
      .assert.visible('@affiliates')
      .click('@affiliates');

    browser.page.affiliates.affiliatesPage()
      .assert.visible('@title')
      .openAffiliate(browser, '2305');

    detailsPage
      .editValueAllFields('newAffiliate_edit_12345', '12345');

    detailsPage
      .checkFieldFilling('newAffiliate_edit_12345', '12345');

  }
};