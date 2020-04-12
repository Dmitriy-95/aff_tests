let baseCommands = {
  getRandom: function () {
    let min = 1000;
    let max = 9999;
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
};

module.exports = {
  commands: [baseCommands],
  sections: {
    menu: {
      selector: '#left-panel',
      elements: {
        seeMore: {
          selector: './/a[text() = "+ See More"]',
          locateStrategy: 'xpath'
        },
        dashboard: {
          selector: 'li[title = "Dashboard"]'
        },
        brands: {
          selector: 'li[title = "Brands"]'
        },
        affiliates: {
          selector: 'li[title = "Affiliates"]'
        },
        offers: {
          selector: 'li[title = "Offers"]'
        },
        commissionPlan: {
          selector: 'li[title = "Commission plan"]'
        },
        deposits: {
          selector: 'li[title = "Deposits"]'
        },
        leads: {
          selector: 'li[title = "Leads"]'
        },
        distributionStats: {
          selector: 'li[title = "Distribution stats"]'
        },
        direct: {
          selector: 'li[title = "Direct"]'
        },
        personal: {
          selector: 'li[title = "Personal"]'
        },
        roles: {
          selector: 'li[title = "Roles"]'
        },
        managers: {
          selector: 'li[title = "Managers"]'
        },
        financeAnalytics: {
          selector: 'li[title = "Finance analytics"]'
        },
        invoices: {
          selector: 'li[title = "Invoices"]'
        }
      }
    }
  },
  elements: {
    logo: {
      selector: '#logo'
    }
  }
};