const { When, Then } = require ('@wdio/cucumber-framework');
const mailServicePage = require('../pageobjects/mailServicePage');
const {expect} = require('chai');

When(/^I click Send Email button$/, async () => {
    await mailServicePage.sendEmailButton.click();  
});

Then(/^I should see the draft email dissapeared from draft emails list$/, async () => {
    await browser.pause(3000);
    expect(await mailServicePage.sentEmail.isDisplayed()).to.equal(false);
});
