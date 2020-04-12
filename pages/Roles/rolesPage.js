let roleCommands = {

};

module.exports = {
  commands: [roleCommands],
  elements: {
    title: {
      selector: '.page-title'
    },
    newRoleButton: {
      selector: './/button/p[text() = "Add new Role"]',
      locateStrategy: 'xpath'
    }
  }
};