module.exports = {
  'add new manager test': function (browser) {
    let basePage = browser.page.basePage();
    let number = basePage.getRandom();
    let name = 'newAffiliate_' + number;
    let managersPage = browser.page.managers.managersPage();

    browser.page.loginPage()
      .navigate()
      .logIn('manager@test.com', 'Aa1234');

    basePage
      .assert.visible('#logo');

    basePage
      .section.menu.click('@seeMore');

    basePage
      .section.menu.click('@managers');

    managersPage
      .assert.visible('@title')
      .addManager(browser, name);

    managersPage
      .refresh
      .pause(6000)
      // .waitForElementPresent('css selector', 'div[data-test-name="' + name + '"]')
      .click('div[data-test-name="' + name + '"]');

  }
};