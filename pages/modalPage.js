let modalCommands = {
  clickButton: function (text) {
    return this
      .assert.containsText('@message', text)
      .click('@button');
  }
};

module.exports = {
  commands: [modalCommands],
  elements: {
    button: {
      selector: 'button.ASM_successfullyAdded__button'
    },
    message: {
      selector: 'span.ASM_successfullyAdded__text'
    }
  }
};