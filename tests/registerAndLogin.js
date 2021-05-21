import { Selector } from 'testcafe';
import {registerPage} from '../pages/register';
import {loginPage} from '../pages/login';
import {mainPage} from '../pages/main'

const fName = `Random${Date.now()}`;
const lName = `Jack${Date.now()}`;
const eAddress = `jack${Date.now()}@abc.com`;
var pwd = 'MyPwd12345';

fixture `Story1`
    .page `https://ui-test-app.betty.app/login`;

test('As a new customer I want to register a new account, so that I can use the application', async t => {
    await t
        .click(loginPage.registerButton)
        .typeText(registerPage.firstNameInput, fName)
        .typeText(registerPage.lastNameInput, lName)
        .typeText(registerPage.emailAddressInput, eAddress)
        .typeText(registerPage.passwordInput, pwd)
        .click(registerPage.submitButton)        
        .expect(loginPage.createdMessage.exists).ok('Account was not created')
        .typeText(loginPage.emailAddressInput, eAddress)
        .typeText(loginPage.passwordInput, pwd)
        .click(loginPage.submitButton)     
        .expect(mainPage.getWelcomeHeader(fName, lName).exists).ok('Login Failed')
});
