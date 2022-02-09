const { When, Then } = require ('@wdio/cucumber-framework');
const loginPage = require('../pageobjects/loginPage');
const {expect} = require('chai');

When(/^I write '(.*)' in the Email field$/, async (emailAddressValue) => {
    await loginPage.inputLogin.setValue(emailAddressValue);
});

When(/^I click Next button$/, async () => {
    await loginPage.forwarLogindButton.click();
});

When(/^I write '(.*)' in the Password field$/, async (passwordValue) => {
    await loginPage.inputPass.setValue(passwordValue);
});

When(/^I click Submit button$/, async () => {
    await loginPage.forwarPassButton.click();
});

Then(/^I should see the authorised user yahoo mail service page$/, async () => {
    expect(await (browser.getTitle())).to.include('qaautomation07@yahoo.com');
});