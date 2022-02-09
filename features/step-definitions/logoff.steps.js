const { When, Then } = require ('@wdio/cucumber-framework');
const startPage = require('../pageobjects/startPage');
const mailServicePage = require('../pageobjects/mailServicePage');
const {expect} = require('chai');

When(/^I hover over Account icon$/, async () => {
    await mailServicePage.accountButton.moveTo();  
});

When(/^I click the Log off button$/, async () => {
    await mailServicePage.logOffButton.waitForDisplayed({ timeout: 3000 });   
    await mailServicePage.logOffButton.click(); 
});

Then(/^I should see yahoo home page$/, async () => {
    await (startPage.MailButton).waitForDisplayed({ timeout: 10000 });
    expect(await startPage.MailButton.isDisplayed()).to.equal(true);
});
