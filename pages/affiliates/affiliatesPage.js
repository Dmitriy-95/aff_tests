let affiliateCommands = {
  addAffiliate: function (browser, name, number) {
    let modalPage = browser.page.modalPage();
    let detailsPage = browser.page.affiliates.detailsPage();

    this
      .assert.visible('@newAffiliateButton')
      .click('@newAffiliateButton');

    detailsPage
      .assert.containsText('@titleNewAffiliate', 'New Affiliate')
      .setValueAllFields(name, number);

    detailsPage
      .click('@saveButton');

    modalPage
      .clickButton(name + ' has been Successfully added');

    detailsPage
      .checkFieldFilling(name, number);
  },

  openAffiliate: function (browser, iDAffiliate, name) {
    browser
      .click('.affiliate_id-' + iDAffiliate + ' .fixedDataTableCellLayout_main:nth-child(2) > .main-after')
      .doubleClick();

    let detailsPage = browser.page.affiliates.detailsPage();

    for (let i = 0; i < 20; i++) {
      detailsPage.getValue('@nameField', function (result) {
        if (result.value === '') {
          browser
            .pause(1000);
        }
      });
    }

  }
};

module.exports = {
  commands: [affiliateCommands],
  elements: {
    newAffiliateButton: {
      selector: 'button.ASM_button_primary'
    },
    title: {
      selector: 'h1.new-page-title'
    }
  }
};