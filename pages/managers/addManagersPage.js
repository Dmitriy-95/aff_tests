let addManagerCommands = {
  setValueAllFields: function (text) {
     this
       .setValue('@nameField', text)
       .setValue('@emailField', text + '@fx.com')
       .setValue('@passwordField', '12345')
       .setValue('@confirmField', '12345')
       .click('@selected_1')
       .click('@selected_2');
  },

  checkFieldFilling: function (text) {
    this
      .assert.value('@nameField', text)
      .assert.value('@emailField', text + '@fx.com');
  }
};
module.exports = {
  commands: [addManagerCommands],
  elements: {
    title: {
      selector: '.page-title'
    },
    nameField: {
      selector: 'input[name = "name"]'
    },
    emailField: {
      selector: 'input[name = "email"]'
    },
    passwordField: {
      selector: 'input[name = "password"]'
    },
    confirmField: {
      selector: 'input[name = "confirmation"]'
    },
    selected_1: {
      selector: '.editable-click'
    },
    selected_2: {
      selector: '.AFFILIATE .checkbox'
    },
    submitButton: {
      selector: '.btn-success'
    }
  }
};