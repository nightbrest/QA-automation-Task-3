const Page = require('../pageobjects/page');;

const selectors = {
    MailButton: '//a[@id="ybarMailLink"]',
    accountButton: '//input[@id="ybarAccountMenu"]',
    logOffButton: '//a[@id="profile-signout-link"]'
};

class LogoffPage extends Page {
    get MailButton() { return $(selectors.MailButton) };

    get accountButton() { return $(selectors.accountButton) };
    
    get logOffButton() { return $(selectors.logOffButton) };
};

module.exports = new LogoffPage();
