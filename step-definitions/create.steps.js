const { When, Then } = require ('@wdio/cucumber-framework');
const createPage = require('../pageobjects/createPage');
const {expect} = require('chai');

When(/^I click Compose button$/, async () => {
    await createPage.createMailButton.click();
});

When(/^I write 'vis_cesar@mail.ru' in the Address field$/, async () => {
    await createPage.inputReceiver.setValue('vis_cesar@mail.ru');
});

When(/^I write 'Test subject' in the Subject field$/, async () => {
    await createPage.inputSubject.setValue('Test subject');
});

When(/^I write 'Hello, world! Hello, world! Hello, world!' in the Body field$/, async () => {
    await createPage.inputMessage.setValue('Hello, world! Hello, world! Hello, world!');
});

Then(/^I should see that all fields of email are filled correct$/, async () => {
    expect(await (createPage.createdReceiver).getText()).to.include('vis_cesar@mail.ru');
    expect(await (createPage.createdSubject).getAttribute('value')).to.contain('Test subject');
    expect(await (createPage.createdMessage).getText()).to.contain('Hello, world! Hello, world! Hello, world!');
});