const { Given, When, Then } = require ('@wdio/cucumber-framework');
const startPage = require('../pageobjects/startPage');
const loginPage = require('../pageobjects/loginPage');
const {expect} = require('chai');

Given(/^I am on start mail page$/, async () => {
    await startPage.open('https://mail.yahoo.com/');
    await (startPage.yahooLogo).waitForDisplayed({ timeout: 15000 });
    expect(await (startPage.yahooLogo.getAttribute('alt'))).to.equal("Yahoo Mail");
});

When(/^I click on "Sign in" button$/, async () => {
    await startPage.signInButton.click();
});

Then(/^I should see the yahoo mail login page with the login form$/, async () => {
    await (loginPage.loginForm).waitForDisplayed({ timeout: 10000 });
    expect (await (loginPage.loginForm).isDisplayed()).to.equal(true);
});

