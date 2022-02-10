const Page = require('../pageobjects/page');;

const selectors = {
    createMailButton:'//a[@data-test-id="compose-button"]',
    inputReceiver:'//input[@id="message-to-field"]',
    inputSubject:'//input[@data-test-id="compose-subject"]',
    inputMessage:'//div[@data-test-id="rte"]',
    createdReceiver:'//div[@data-test-id="pill-text"]',
    createdSubject:'//input[@data-test-id="compose-subject"]',
    createdMessage: '//div[@data-test-id="compose-editor-container"]',
};

class CreatePage extends Page {
    get createMailButton() { return $(selectors.createMailButton) };

    get inputReceiver() { return $(selectors.inputReceiver) };

    get inputSubject() { return $(selectors.inputSubject) };

    get inputMessage() { return $(selectors.inputMessage) };

    get createdReceiver() { return $(selectors.createdReceiver) };

    get createdSubject() { return $(selectors.createdSubject) };

    get createdMessage() { return $(selectors.createdMessage) };

};

module.exports = new CreatePage();
