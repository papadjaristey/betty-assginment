import {registerPage} from '../pages/registeration';
import {loginPage} from '../pages/login';
import {mainPage} from '../pages/main';

const {userInfo} = require('../variables')

fixture `Story 1`
    .page `https://ui-test-app.betty.app/login`;

test('As a new customer I want to register a new account, so that I can use the application', async t => {
    await t
        .click(loginPage.registerButton)
        .typeText(registerPage.firstNameInput, userInfo.fName)
        .typeText(registerPage.lastNameInput, userInfo.lName)
        .typeText(registerPage.emailAddressInput, userInfo.eAddress)
        .typeText(registerPage.passwordInput, userInfo.pwd)
        .click(registerPage.submitButton)
        .expect(loginPage.createdMessage.exists).ok('Account not created')
        .typeText(loginPage.emailAddressInput, userInfo.eAddress)
        .typeText(loginPage.passwordInput, userInfo.pwd)
        .click(loginPage.submitButton)
        .expect(mainPage.getWelcomeHeader(userInfo.fName, userInfo.lName).exists).ok('Login failed')
});
