const Page = require('../pageobjects/page');;

const selectors = {
    sentEmailButton: '//span[@data-test-folder-name="Sent"]', 
    sentEmail:'//span[@title="vis_cesar@mail.ru"][1]', 
};

class SentPage extends Page {
    get sentEmailButton() { return $(selectors.sentEmailButton) }; 
    get sentEmail() { return $(selectors.sentEmail) };
};

module.exports = new SentPage();
