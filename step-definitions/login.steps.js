const { When, Then } = require ('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/loginPage');
const {expect} = require('chai');

When(/^I write 'qaautomation07@yahoo.com' in the Email field$/, async () => {
    await loginPage.inputLogin.setValue('qaautomation07@yahoo.com');
});

When(/^I click Next button$/, async () => {
    await loginPage.forwarLogindButton.click();
});

When(/^I write 'suHGals126' in the Password field$/, async () => {
    await loginPage.inputPass.setValue('suHGals126');
});

When(/^I click Submit button$/, async () => {
    await loginPage.forwarPassButton.click();
});

Then(/^I should see the authorised user yahoo mail service page$/, async () => {
    expect(await (browser.getTitle())).to.include('qaautomation07@yahoo.com');
});