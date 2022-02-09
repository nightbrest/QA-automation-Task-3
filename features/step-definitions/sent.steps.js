const { When, Then } = require ('@wdio/cucumber-framework');
const mailServicePage = require('../pageobjects/mailServicePage');
const {expect} = require('chai');

When(/^I click Sent folder button$/, async () => {
    await mailServicePage.sentEmailButton.click();
});

Then(/^I should see that just sent email apeared in sent list$/, async () => {
    await (mailServicePage.sentEmail).waitForDisplayed({ timeout: 10000 });
    expect(await mailServicePage.sentEmail.isDisplayed()).to.equal(true);
});
