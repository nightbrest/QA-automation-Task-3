const { When, Then } = require ('@wdio/cucumber-framework');
const draftsPage = require('../pageobjects/draftsPage');
const {expect} = require('chai');

When(/^I click Drafts button$/, async () => {
    await draftsPage.draftsButton.click();  
});

Then(/^I should see that email time of creation matches the RegExp pattern$/, async () => {
    const timeOfEmailCreation = await draftsPage.timeOfCreation.getText();
    expect((new RegExp('\\d{2}:\\d{2}')).test(timeOfEmailCreation)).to.equal(true);
});

Then(/^I should see the created email on the top of the draft list$/, async () => {
    await browser.waitUntil(() => draftsPage.draftedEmail.isClickable());
});

When(/^I click on the email that is on the top of the draft list$/, async () => {
    await draftsPage.draftedEmail.click();
});

Then(/^I should see that Address field is filled by 'vis_cesar@mail.ru'$/, async () => {
    expect(await draftsPage.receiverValue.getAttribute('title')).to.contain('vis_cesar@mail.ru');
});

Then(/^I should see that Subject field is filled by 'Test subject'$/, async () => {
    expect(await draftsPage.subjectValue.getAttribute('value')).to.contain('Test subject');
});

Then(/^I should see that Body field is filled by 'Hello, world! Hello, world! Hello, world!'$/, async () => {
    expect(await draftsPage.inputMessage.getText()).to.contain('Hello, world! Hello, world! Hello, world!');
});