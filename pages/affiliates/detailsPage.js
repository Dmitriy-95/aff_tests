let detailsCommands = {
  setValueAllFields: function (name, number, fields) {
    this
      .setValue('@nameField', name)
      .setValue('@companyField', name)
      .setValue('@emailField', name + '@fx.com')
      .click('@statusField_2')
      .click('@statusFieldSelect')
      .setValue('@addressField', name)
      .setValue('@phoneField', '+1987345' + number)
      .setValue('@paymentField', name)
      .setValue('@websiteField', 'http://' + name + '.com')
      .setValue('@skypeField', '@' + name)
      .setValue('@passwordField', '12345')
      .setValue('@confirmPasswordField', '12345');

  },

  editValueAllFields: function (name, number) {
    let fields = ['@nameField', '@companyField', '@emailField', '@addressField',
    '@phoneField', '@paymentField', '@websiteField', '@skypeField'];

    for (let i = 0; i < fields.length; i++) {
      this
        .clearValue(fields[i])
    }

    this
      .setValue('@nameField', name)
      .setValue('@companyField', name)
      .setValue('@emailField', name + '@fx.com')
      .setValue('@addressField', name)
      .setValue('@paymentField', name)
      .setValue('@phoneField', '+1987345' + number)
      .setValue('@websiteField', 'http://' + name + '.com')
      .setValue('@skypeField', '@' + name)
      .click('@saveButton');
  },


  checkFieldFilling: function (name, number) {
    this
      .assert.value('@nameField', name)
      .assert.value('@companyField', name)
      .assert.value('@emailField', name + '@fx.com')
      .assert.value('@addressField', name)
      .assert.value('@phoneField', '+1987345' + number)
      .assert.value('@paymentField', name)
      .assert.value('@websiteField', 'http://' + name + '.com')
      .assert.value('@skypeField', '@' + name);
  },

  signInAsAffiliate: function () {
    this
      .assert.visible('@signInAffiliateButton')
      .click('@signInAffiliateButton');
  }
};

module.exports = {
  commands: [detailsCommands],
  elements: {
    title: {
      selector: '.row-section'
    },
    titleNewAffiliate: {
      selector: 'h2.ASM_AffiliatesNewAffiliate_header'
    },
    nameField: {
      selector: 'input[placeholder="+Add affiliate name"]'
    },
    companyField: {
      selector: 'input[placeholder="+Add company name"]'
    },
    emailField: {
      selector: 'input[placeholder="+Add email"]'
    },
    statusField: {
      selector: 'input#react-select-4-input'
    },
    statusField_2: {
      selector: 'div.ASM_select__indicators'
    },
    statusFieldSelect: {
      selector: 'div#react-select-2-option-7'
    },
    addressField: {
      selector: 'input[placeholder="+Add address"]'
    },
    phoneField: {
      selector: 'input[placeholder="+Add Phone Number"]'
    },
    paymentField: {
      selector: 'input[placeholder="+Add Bank Details"]'
    },
    websiteField: {
      selector: 'input[placeholder="+Add URL"]'
    },
    skypeField: {
      selector: 'input[placeholder="+Add Skype name"]'
    },
    passwordField: {
      selector: 'input[placeholder="Create Password"] '
    },
    confirmPasswordField: {
      selector: 'input[placeholder="Confirm Password"] '
    },
    saveButton: {
      selector: 'button[type="submit"]'
    },
    signInAffiliateButton: {
      selector: '.row-section .ASM_button_primary'
    }
  }
};