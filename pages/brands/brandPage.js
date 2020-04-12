let brandCommands = {
  addBrand: function () {
    function getRandom(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    let brandNumber = getRandom(1000, 9999);
    return this
      .assert.visible('@addBrandButton')
      .click('@addBrandButton')
      .assert.containsText('@titleNewBrand', 'New Brand')
      .setValue('@nameField', 'newTestBrand_' + brandNumber)
      .setValue('@addressField', 'newTestBrand_' + brandNumber)
      .setValue('@emailField', 'newTestBrand_' + brandNumber + '@fx.com')
      .setValue('@paymentField', 'newTestBrand_' + brandNumber)
      .setValue('@phoneField', '+1098765' + brandNumber)
      .setValue('@websiteField', 'http://newTestBrand_' + brandNumber + '.com')
      .setValue('@skypeField', '@newTestBrand_' + brandNumber)
      .setValue('@passwordField', '12345')
      .setValue('@confirmPasswordField', '12345')
      .assert.visible('@submitButton')
      .click('@submitButton')
      .assert.containsText('@message', 'has been Successfully added your brand')
      .click('@modalButton')
      .assert.value('@nameField', 'newTestBrand_' + brandNumber)
      .assert.value('@addressField', 'newTestBrand_' + brandNumber)
      .assert.value('@emailField', 'newTestBrand_' + brandNumber + '@fx.com')
      .assert.value('@paymentField', 'newTestBrand_' + brandNumber)
      .assert.value('@phoneField', '+1098765' + brandNumber)
      .assert.value('@websiteField', 'http://newTestBrand_' + brandNumber + '.com')
      .assert.value('@skypeField', '@newTestBrand_' + brandNumber);
  }
};

module.exports = {
  commands: [brandCommands],
  elements: {
    addBrandButton: {
      selector: 'button[class = "ASM_button ASM_button_section ASM_button_primary"]'
    },
    title: {
      selector: 'h1[class="new-page-title"]'
    },
    titleNewBrand: {
      selector: 'h2[class = "ASM_heading "]'
    },
    nameField: {
      selector: 'input[placeholder="+Add brand name"]'
    },
    passwordField: {
      selector: 'input[placeholder="Create Password"]'
    },
    confirmPasswordField: {
      selector: 'input[placeholder="Confirm Password"]'
    },
    submitButton: {
      selector: 'button[type="submit"]'
    },
    modalButton: {
      selector: 'button.ASM_successfullyAdded__button'
    },
    message: {
      selector: 'span.ASM_successfullyAdded__text'
    },
    addressField: {
      selector: 'input[placeholder="+Add address"]'
    },
    emailField: {
      selector: 'input[placeholder="+Add email"]'
    },
    paymentField: {
      selector: 'input[placeholder="+Add Bank Details"]'
    },
    phoneField: {
      selector: 'input[placeholder="+Add Phone Number"]'
    },
    websiteField: {
      selector: 'input[placeholder="+Add URL"]'
    },
    skypeField: {
      selector: 'input[placeholder="+Add Skype name"]'
    }
  }
}
;