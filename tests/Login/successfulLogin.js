module.exports = {
  'successful login': function (browser) {
    let loginPage = browser.page.loginPage();

    loginPage
      .navigate()
      .expect.section('@login').to.be.visible;

    loginPage
      .logIn('manager@test.com', 'Aa1234');

    browser.page.basePage()
      .assert.visible('#logo');
  }
};