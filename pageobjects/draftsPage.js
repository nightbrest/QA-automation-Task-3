const Page = require('../pageobjects/page');;

const selectors = {
    draftsButton:'//span[@data-test-folder-name="Draft"]',
    receiverValue: '//div[@data-test-id="pill"]',
    subjectValue:'//input[@data-test-id="compose-subject"]',
    draftedEmail:'//span[@title="vis_cesar@mail.ru"][1]',
    inputMessage:'//div[@data-test-id="rte"]',
    timeOfCreation: '//time[@role="gridcell"][1]'
};

class DraftsPage extends Page {
    get inputMessage() { return $(selectors.inputMessage) };

    get draftsButton() { return $(selectors.draftsButton) };

    get receiverValue() { return $(selectors.receiverValue) };

    get subjectValue() { return $(selectors.subjectValue) };

    get draftedEmail() { return $(selectors.draftedEmail) };

    get timeOfCreation() { return $(selectors.timeOfCreation) };

};

module.exports = new DraftsPage();
