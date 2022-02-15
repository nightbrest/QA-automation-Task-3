const { When, Then } = require ('@wdio/cucumber-framework');
const draftsPage = require('../pageobjects/draftsPage');
const {expect} = require('chai');

When(/^I click Drafts button$/, async () => {
    await draftsPage.draftsButton.click();  
});

// Then(/^I should see the created email on the top of the draft list$/, async () => {
//     await draftsPage.draftedEmail.waitForDisplayed({ timeout: 20000 });   
// });

Then(/^I should see that email time of creation matches the RegExp pattern$/, async () => {
    const timeOfEmailCreation = await draftsPage.timeOfCreation.getText();
    expect((new RegExp('\\d{2}:\\d{2}')).test(timeOfEmailCreation)).to.equal(true);
});

When(/^I click on the email that is on the top of the draft list$/, async () => {
    await draftsPage.draftedEmail.click();
});

Then(/^I should see that Address field is filled by '(.*)'$/, async (receiver) => {
    expect(await draftsPage.receiverValue.getAttribute('title')).to.contain(receiver);
});

Then(/^I should see that Subject field is filled by '(.*)'$/, async (subject) => {
    expect(await draftsPage.subjectValue.getAttribute('value')).to.contain(subject);
});

Then(/^I should see that Body field is filled by '(.*)'$/, async (message) => {
    expect(await draftsPage.inputMessage.getText()).to.contain(message);
})