let managerCommands = {
  addManager: function (browser ,text) {
    let addManagersPage = browser.page.managers.addManagersPage();

     this
      .assert.containsText('@title', 'Managers')
      .click('@newManagerButton');

     addManagersPage
       .setValueAllFields(text);

     addManagersPage
       .checkFieldFilling(text);

    addManagersPage
      .click('@submitButton');
  }
};

module.exports = {
  commands: [managerCommands],
  elements: {
    title: {
      selector: '.new-page-title'
    },
    newManagerButton: {
      selector: '.ASM_button_primary'
    }
  }
};