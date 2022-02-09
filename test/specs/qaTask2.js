const startPage = require('../pageobjects/startPage');
const loginPage = require('../pageobjects/loginPage');
const mailServicePage = require('../pageobjects/mailServicePage');
const {expect} = require('chai');

describe("Testing and verifying main fuctualities of yahoo mail service: ", () => {
    it('Should open mail page and verify that it is correct page', async () => {
        await startPage.open('https://mail.yahoo.com/');
        await (startPage.yahooLogo).waitForDisplayed({ timeout: 15000 });
        expect(await (startPage.yahooLogo.getAttribute('alt'))).to.equal("Yahoo Mail");
        await startPage.signInButton.click();
    });

    it('Should verify that login form was opened', async () => {
        await (loginPage.loginForm).waitForDisplayed({ timeout: 10000 });
        expect (await (loginPage.loginForm).isDisplayed()).to.equal(true);
    });

    it("Should fill in login form and verify of successful logging", async () => {
        await loginPage.inputLogin.setValue('qaautomation07@yahoo.com');
        await loginPage.forwarLogindButton.click();
        await loginPage.inputPass.setValue('suHGals126');
        await loginPage.forwarPassButton.click();
        expect(await (browser.getTitle())).to.include('qaautomation07@yahoo.com');
    });    

    it('Should create new email and verify that all fields are filled correct ', async () => {
        await mailServicePage.createMailButton.click();
        await mailServicePage.inputReceiver.setValue('vis_cesar@mail.ru');
        await mailServicePage.inputSubject.setValue('Test subject');
        await mailServicePage.inputMessage.setValue('Hello, world! Hello, world! Hello, world!');
        expect(await (mailServicePage.createdReceiver).getText()).to.include('vis_cesar@mail.ru');
        expect(await (mailServicePage.createdSubject).getAttribute('value')).to.contain('Test subject');
        expect(await (mailServicePage.createdMessage).getText()).to.contain('Hello, world! Hello, world! Hello, world!');
    });

    it('Should save created mail in Drafts; open last email in drafts; verify that body of draft email is correct and send email', async () => {
        await mailServicePage.draftsButton.click();  
        await browser.waitUntil(() => mailServicePage.draftedEmail.isClickable());  
        await mailServicePage.draftedEmail.click();
        expect(await mailServicePage.receiverValue.getAttribute('title')).to.contain('vis_cesar@mail.ru');
        expect(await mailServicePage.subjectValue.getAttribute('value')).to.contain('Test subject');
        expect(await mailServicePage.inputMessage.getText()).to.contain('Hello, world! Hello, world! Hello, world!');
        await mailServicePage.sendEmailButton.click();
    }); 

    it('Should open "Sent" folder and verify that sent email is in "Sent" folder', async () => {
        await mailServicePage.sentEmailButton.click();
        await (mailServicePage.sentEmail).waitForDisplayed({ timeout: 10000 });
        expect(await mailServicePage.sentEmail.isDisplayed()).to.equal(true);
    });

    it('Should verify that sent email has dissapeared from "Draft" folder', async () => {
        await mailServicePage.draftsButton.click();
        expect(await mailServicePage.sentEmail.isDisplayed()).to.equal(false);
    });

    it('Should log off and verify of being log out', async () => {
        await mailServicePage.accountButton.moveTo();   
        await mailServicePage.logOffButton.waitForDisplayed({ timeout: 3000 });   
        await mailServicePage.logOffButton.click();
        await (startPage.MailButton).waitForDisplayed({ timeout: 10000 });
        expect(await startPage.MailButton.isDisplayed()).to.equal(true);
    });
}); 