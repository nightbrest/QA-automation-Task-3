const { When, Then } = require ('@wdio/cucumber-framework');
const createPage = require('../pageobjects/createPage');
const {expect} = require('chai');

When(/^I click Compose button$/, async () => {
    await createPage.createMailButton.click();
});

When(/^I write '(.*)' in the Address field$/, async (receiver) => {
    await createPage.inputReceiver.setValue(receiver);
});

When(/^I write '(.*)' in the Subject field$/, async (subject) => {
    await createPage.inputSubject.setValue(subject);
});

When(/^I write '(.*)' in the Body field$/, async (message) => {
    await createPage.inputMessage.setValue(message);
});

Then(/^I should see that Receiver field is filled with '(.*)'$/, async (receiver) => {
    expect(await (createPage.createdReceiver).getText()).to.include(receiver);
});

Then(/^I should see that Subject field is filled with '(.*)'$/, async (subject) => {
    expect(await (createPage.createdSubject).getAttribute('value')).to.contain(subject);
});

Then(/^I should see that Message field is filled with '(.*)'$/, async (message) => {
    expect(await (createPage.createdMessage).getText()).to.contain(message);
});