module.exports = {
  'add new affiliates test': function (browser) {
    function getRandom(min, max) {
      let rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    }

    let number = getRandom(1000, 9999);
    let name = 'newAffiliate_' + number;
    let basePage = browser.page.basePage();

    // browser
    //   .url('http://manager.test.leadsmarket.stacks.filiatix.com')
    //   .pause(5000)
    //   .setValue('css selector', 'input[type="email"]', 'manager@test.com')
    //   .setValue('css selector', 'input[type="password"]', 'Aa1234')
    //   .click('button[type="submit"]')
    //   .pause(3000)
    //   .click('li[title="Affiliates"]')
    //   .pause(6000)
    //   // .moveToElement('css selector', 'div[aria-rowindex="2"]', 0, 0)
    //   .click('div[aria-rowindex="2"]')
    //   .doubleClick(function () {
    //     browser
    //       .moveToElement('css selector', 'div[aria-rowindex="2"]', 0, 0)
    //   })
    //   // .click('div[aria-rowindex="2"]')
    //   // .click('div[aria-rowindex="2"]')
    //   .pause(6000);

    browser
      .url('http://manager2.test.leadsmarket.stacks.filiatix.com')
      .pause(5000)
      .setValue('css selector', 'input[type="email"]', 'manager@test.com')
      .setValue('css selector', 'input[type="password"]', 'Aa1234')
      .click('button[type="submit"]')
      .pause(3000)
      .click('li[title="Affiliates"]')
      .pause(6000)
      .click('.affiliate_id-2305')
      .doubleClick()
      .pause(6000);
    let detailsPage = browser.page.affiliates.detailsPage();
    let value = detailsPage.getValue('@nameField');
    console.log(value);

    // for (let i = 0; i < 5; i++) {
    //   let value = detailsPage.getValue('@nameField');
    //   if (value == null) {
    //     browser
    //       .pause(1000);
    //   }
    // }


    // browser.page.loginPage()
    //   .navigate()
    //   .logIn('manager@test.com', 'Aa1234');

    // basePage
    //   .assert.visible('#logo');
    //
    // basePage
    //   .section.menu.click('@affiliates');
    //
    // browser.page.affiliates.affiliatesPage()
    //   .assert.visible('@title')
    //   .assert.containsText('@title', 'Affiliates')
    //   .addAffiliate(browser, name, number);
    //
    // browser.page.affiliates.detailsPage()
    //   .pause(5000)
    //
    //   .editValueAllFields(name + 'edit', number);
    //
    // browser
    //   .pause(5000);

  }
};