module.exports = {
  'menu test': function (browser) {
    let basePage = browser.page.basePage();

    browser.page.loginPage()
      .navigate()
      .logIn('manager@test.com', 'Aa1234');

    basePage
      .assert.visible('#logo');

    basePage.section.menu
      .click('@seeMore')
      .assert.visible('@dashboard')
      .assert.visible('@brands')
      .assert.visible('@affiliates')
      .assert.visible('@offers')
      .assert.visible('@commissionPlan')
      .assert.visible('@deposits')
      .assert.visible('@leads')
      .assert.visible('@distributionStats')
      .assert.visible('@direct')
      .assert.visible('@personal')
      .assert.visible('@roles')
      .assert.visible('@managers')
      .assert.visible('@financeAnalytics')
      .assert.visible('@invoices');

  }
};