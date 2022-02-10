const { When, Then } = require ('@wdio/cucumber-framework');
const logoffPage = require('../pageobjects/logoffPage');
const {expect} = require('chai');

When(/^I hover over Account icon$/, async () => {
    await logoffPage.accountButton.moveTo();  
});

When(/^I click the Log off button$/, async () => {
    await logoffPage.logOffButton.waitForDisplayed({ timeout: 3000 });   
    await logoffPage.logOffButton.click(); 
});

Then(/^I should see yahoo home page$/, async () => {
    await (logoffPage.MailButton).waitForDisplayed({ timeout: 10000 });
    expect(await logoffPage.MailButton.isDisplayed()).to.equal(true);
});
