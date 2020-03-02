module.exports = {
  'successful login': function (browser) {
    let loginPage = browser.page.loginPage();
    let basePage = browser.page.basePage();

    loginPage
      .navigate()
      .expect.section('@login').to.be.visible;

    loginPage
      .logIn('manager@test.com', 'Aa1234');

    basePage
      .assert.visible('#logo');
  }
};