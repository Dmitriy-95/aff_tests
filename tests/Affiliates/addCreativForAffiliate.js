module.exports = {
  'menu test': function (browser) {

    let basePage = browser.page.basePage();

    let detailsPage = browser.page.affiliates.detailsPage();

    browser.page.loginPage()
      .navigate()
      .logIn('manager@test.com', 'Aa1234');

    basePage.assert.visible('#logo');

    basePage.section.menu
      .assert.visible('@affiliates')
      .click('@affiliates');

    browser.page.affiliates.affiliatesPage()
      .assert.visible('@title')
      .openAffiliate(browser, '2305');

    detailsPage.signInAsAffiliate();
    browser.pause(4000);

    browser.windowHandles(function (result) {
      let handle = result.value[1];
      browser.switchWindow(handle);
    });

    basePage.assert.visible('#logo');
    browser.click('.affiliate-navigation-component li[title="Offers"]');
    browser.click('li[title="Funnels"]');

    browser
      .assert.visible('div[data-test-name="funnel-test funnel"]')
      .click('div[data-test-name="funnel-test funnel"]')
      .click('div[data-test-name="funnel-test funnel"] button')
      // .click('button[role="presentational"]')
      .click('button[role="presentational"]');

    browser.pause(2000);


    browser
      .click('li[role="option"]')
      .click('button[type="submit"]')
      .click('button[type="button"]');

    browser.pause(5000);
  }
};