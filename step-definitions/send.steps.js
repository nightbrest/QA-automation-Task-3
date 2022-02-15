const { When, Then } = require ('@wdio/cucumber-framework');
const sendPage = require('../pageobjects/sendPage');
const {expect} = require('chai');

When(/^I click Send Email button$/, async () => {
    await sendPage.sendEmailButton.click();  
});

Then(/^I should see the draft email dissapeared from draft emails list$/, async () => {
    browser.refresh();
    await sendPage.sentEmail.waitForDisplayed({ reverse: true });
    expect(await sendPage.sentEmail.isDisplayed()).to.equal(false);
});
