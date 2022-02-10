const Page = require('./page');

const selectors = {
    signInButton: '//a[@alt="Sign in"]',
    MailButton: '//a[@id="ybarMailLink"]',
    yahooLogo: '//img[@alt="Yahoo Mail"]'
};

class StartPage extends Page {
    get signInButton() { return $(selectors.signInButton) };

    get MailButton() { return $(selectors.MailButton) };
    
    get yahooLogo() { return $(selectors.yahooLogo) };
};

module.exports = new StartPage();

