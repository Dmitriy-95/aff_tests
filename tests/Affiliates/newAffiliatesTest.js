module.exports = {
  'add new affiliates test': function (browser) {
    function getRandom(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    let number = getRandom(1000, 9999);
    let name = 'newAffiliate_' + number;
    let basePage = browser.page.basePage();

    browser.page.loginPage()
      .navigate()
      .logIn('manager@test.com', 'Aa1234');

    basePage
      .assert.visible('#logo');

    basePage
      .section.menu.click('@affiliates');

    browser.page.affiliates.affiliatesPage()
      .assert.visible('@title')
      .assert.containsText('@title', 'Affiliates')
      .addAffiliate(browser, name, number);

  }
};