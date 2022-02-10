const Page = require('../pageobjects/page');;

const selectors = {
    sendEmailButton: '//button[@data-test-id="compose-send-button"]',
    sentEmail:'//span[@title="vis_cesar@mail.ru"][1]',
};

class SendPage extends Page {
    get sendEmailButton() { return $(selectors.sendEmailButton) };

    get sentEmail() { return $(selectors.sentEmail) };
};

module.exports = new SendPage();

