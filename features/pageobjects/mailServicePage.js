const Page = require('../pageobjects/page');;

const selectors = {
    createMailButton:'//a[@data-test-id="compose-button"]',
    inputReceiver:'//input[@id="message-to-field"]',
    inputSubject:'//input[@data-test-id="compose-subject"]',
    inputMessage:'//div[@data-test-id="rte"]',
    createdReceiver:'//div[@data-test-id="pill-text"]',
    createdSubject:'//input[@data-test-id="compose-subject"]',
    createdMessage: '//div[@data-test-id="compose-editor-container"]',
    draftsButton:'//span[@data-test-folder-name="Draft"]',
    receiverValue: '//div[@data-test-id="pill"]',
    subjectValue:'//input[@data-test-id="compose-subject"]',
    sendEmailButton: '//button[@data-test-id="compose-send-button"]',
    draftedEmail:'//span[@title="vis_cesar@mail.ru"][1]',
    sentEmailButton: '//span[@data-test-folder-name="Sent"]',
    sentEmail:'//span[@title="vis_cesar@mail.ru"][1]',
    accountButton: '//input[@id="ybarAccountMenu"]',
    logOffButton: '//a[@id="profile-signout-link"]'
};

class MailServicePage extends Page {
    get createMailButton() { return $(selectors.createMailButton) };

    get inputReceiver() { return $(selectors.inputReceiver) };

    get inputSubject() { return $(selectors.inputSubject) };

    get inputMessage() { return $(selectors.inputMessage) };

    get createdReceiver() { return $(selectors.createdReceiver) };

    get createdSubject() { return $(selectors.createdSubject) };

    get createdMessage() { return $(selectors.createdMessage) };

    get draftsButton() { return $(selectors.draftsButton) };

    get receiverValue() { return $(selectors.receiverValue) };

    get subjectValue() { return $(selectors.subjectValue) };

    get sendEmailButton() { return $(selectors.sendEmailButton) };

    get draftedEmail() { return $(selectors.draftedEmail) };

    get sentEmailButton() { return $(selectors.sentEmailButton) };

    get sentEmail() { return $(selectors.sentEmail) };

    get accountButton() { return $(selectors.accountButton) };
    
    get logOffButton() { return $(selectors.logOffButton) };
};

module.exports = new MailServicePage();
