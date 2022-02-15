const Page = require('./page');

const selectors = {
    signInButton: '//a[@alt="Sign in"]',
    MailButton: '//a[@id="ybarMailLink"]',
    yahooLogo: '//img[@alt="Yahoo Mail"]',
    loginForm: '//div[@class="login-box right"]',
};

class StartPage extends Page {
    get signInButton() { return $(selectors.signInButton) };

    get MailButton() { return $(selectors.MailButton) };
    
    get yahooLogo() { return $(selectors.yahooLogo) };

    get loginForm() { return $(selectors.loginForm) };
};

module.exports = new StartPage();

