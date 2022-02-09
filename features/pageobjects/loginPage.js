const Page = require('../pageobjects/page');

const selectors = {
    loginForm: '//div[@class="login-box right"]',
    inputLogin: '//input[@id="login-username"]',
    forwarLogindButton: '//input[@id="login-signin"]',
    inputPass: '//input[@id="login-passwd"]',
    forwarPassButton: '//button[@id="login-signin"]'
};

class LoginPage extends Page {
    get loginForm() { return $(selectors.loginForm) };

    get inputLogin() { return $(selectors.inputLogin) };

    get forwarLogindButton() { return $(selectors.forwarLogindButton) };

    get inputPass() { return $(selectors.inputPass) };
    
    get forwarPassButton() { return $(selectors.forwarPassButton) };
};

module.exports = new LoginPage();
