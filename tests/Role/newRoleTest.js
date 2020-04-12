module.exports = {
  'add new Role test': function (browser) {
    let basePage = browser.page.basePage();
    let number = basePage.getRandom();
    let name = 'newRole_' + number;

    browser.page.loginPage()
      .navigate()
      .logIn('manager@test.com', 'Aa1234');

    basePage
      .assert.visible('#logo');

    basePage
      .openPage('roles')


  }
};