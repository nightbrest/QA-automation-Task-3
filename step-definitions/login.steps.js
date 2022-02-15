const { When, Then } = require ('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/loginPage');
const {expect} = require('chai');

When(/^I write '(.*)' in the Email field$/, async (email) => {
    await loginPage.inputLogin.setValue(email);
});

When(/^I click Next button$/, async () => {
    await loginPage.forwarLogindButton.click();
});

When(/^I write '(.*)' in the Password field$/, async (pass) => {
    await loginPage.inputPass.setValue(pass);
});

When(/^I click Submit button$/, async () => {
    await loginPage.forwarPassButton.click();
});

Then(/^I should see the authorised user yahoo mail service page with page title containing '(.*)'$/, async (pagetitle) => {
    expect(await (browser.getTitle())).to.include(pagetitle);
});