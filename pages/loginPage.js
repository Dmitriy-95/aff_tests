let loginCommands = {
  logIn: function (mail, password) {
    let loginFields = this.section.login;
    return loginFields
        .assert.visible('@mail')
        .assert.visible('@password')
        .assert.visible('@submit')
        .setValue('@mail', mail)
        .assert.valueContains('@mail', mail)
        .setValue('@password', password)
        .click('@submit');
  }
};

module.exports = {
  url: 'http://manager2.test.leadsmarket.stacks.filiatix.com/login',
  commands: [loginCommands],
  sections: {
    login: {
      selector: '.login-form',
      elements: {
        mail: {
          selector: 'input[name = "email"]'
        },
        mailMessage: {
          selector: 'div[data-test-name="message-error-email"]'
        },
        password: {
          selector: 'input[name = "password"]'
        },
        passwordMessage: {
          selector: 'div[data-test-name="message-error-password"]'
        },
        submit: {
          selector: 'button[type= "submit"]'
        }
      }
    }
  }
};