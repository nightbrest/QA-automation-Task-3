const { When, Then } = require ('@wdio/cucumber-framework');
const sentPage = require('../pageobjects/sentPage');
const {expect} = require('chai');

When(/^I click Sent folder button$/, async () => {
    await sentPage.sentEmailButton.click();
});

Then(/^I should see that just sent email apeared in sent list$/, async () => {
    await (sentPage.sentEmail).waitForDisplayed({ timeout: 10000 });
    expect(await sentPage.sentEmail.isDisplayed()).to.equal(true);
});
