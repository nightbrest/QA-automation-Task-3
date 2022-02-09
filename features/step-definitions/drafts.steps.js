const { When, Then } = require ('@wdio/cucumber-framework');
const mailServicePage = require('../pageobjects/mailServicePage');
const {expect} = require('chai');

When(/^I click Drafts button$/, async () => {
    await mailServicePage.draftsButton.click();  
});

Then(/^I should see the created email on the top of the draft list$/, async () => {
    await browser.waitUntil(() => mailServicePage.draftedEmail.isClickable());
});

When(/^I click on the email that is on the top of the draft list$/, async () => {
    await mailServicePage.draftedEmail.click();
});

Then(/^I should see that Address field is filled by '(.*)'$/, async (receiverValue) => {
    expect(await mailServicePage.receiverValue.getAttribute('title')).to.contain(receiverValue);
});

Then(/^I should see that Subject field is filled by '(.*)'$/, async (subjectValue) => {
    expect(await mailServicePage.subjectValue.getAttribute('value')).to.contain(subjectValue);
});

Then(/^I should see that Body field is filled by '(.*)'$/, async (messageValue) => {
    expect(await mailServicePage.inputMessage.getText()).to.contain(messageValue);
});