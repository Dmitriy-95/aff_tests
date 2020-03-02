module.exports = {
  'field test on login page ': function (browser) {
    let loginPage = browser.page.loginPage();
    let loginFields = loginPage.section.login;

    loginPage
      .navigate()
      .expect.section('@login').to.be.visible;

    loginFields
      .assert.visible('@mail')      // проверка присутствия полей
      .assert.visible('@password')
      .assert.visible('@submit')
      .assert.not.elementPresent('@mailMessage')        // проверка отсутствия сообщений под полями
      .assert.not.elementPresent('@passwordMessage')
      .click('@submit')
      .assert.elementPresent('@mailMessage')          // проверка появления сообщений и содержания в них текста
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@mailMessage', 'This field is required')
      .assert.containsText('@passwordMessage', 'This field is required')
      .setValue('@mail', 'test')
      .click('@submit')
      .assert.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@mailMessage', 'Invalid email address')
      .assert.containsText('@passwordMessage', 'This field is required')
      .setValue('@mail', 'test@fx.com')
      .click('@submit')
      .assert.not.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@passwordMessage', 'This field is required')
      .setValue('@password', '1')
      .assert.not.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@passwordMessage', 'This field must be 5 characters or more')
      .setValue('@password', '2')
      .assert.not.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@passwordMessage', 'This field must be 5 characters or more')
      .setValue('@password', '3')
      .assert.not.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@passwordMessage', 'This field must be 5 characters or more')
      .setValue('@password', '4')
      .assert.not.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@passwordMessage', 'This field must be 5 characters or more')
      .setValue('@password', '5')
      .assert.not.elementPresent('@mailMessage')
      .assert.not.elementPresent('@passwordMessage')
      .clearValue('@mail')
      .clearValue('@password')
      .assert.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .click('@submit')
      .assert.elementPresent('@mailMessage')
      .assert.elementPresent('@passwordMessage')
      .assert.containsText('@mailMessage', 'This field is required')
      .assert.containsText('@passwordMessage', 'This field is required');
  }
};