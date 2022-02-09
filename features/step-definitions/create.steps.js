const { When, Then } = require ('@wdio/cucumber-framework');
const mailServicePage = require('../pageobjects/mailServicePage');
const {expect} = require('chai');

When(/^I click Compose button$/, async () => {
    await mailServicePage.createMailButton.click();
});

When(/^I write '(.*)' in the Address field$/, async (receiverValue) => {
    await mailServicePage.inputReceiver.setValue(receiverValue);
});

When(/^I write '(.*)' in the Subject field$/, async (subjectValue) => {
    await mailServicePage.inputSubject.setValue(subjectValue);
});

When(/^I write '(.*)' in the Body field$/, async (messageValue) => {
    await mailServicePage.inputMessage.setValue(messageValue);
});

Then(/^I should see that all fields of email are filled correct$/, async () => {
    expect(await (mailServicePage.createdReceiver).getText()).to.include('vis_cesar@mail.ru');
    expect(await (mailServicePage.createdSubject).getAttribute('value')).to.contain('Test subject');
    expect(await (mailServicePage.createdMessage).getText()).to.contain('Hello, world! Hello, world! Hello, world!');
});