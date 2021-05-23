import {registerPage} from '../pages/registeration';
import {loginPage} from '../pages/login';
import {mainPage} from '../pages/main';
import {userInfo} from '../config';

fixture `Story 2`
    .page `https://ui-test-app.betty.app/login`;

test
    .before(async t => {       
        t.ctx.timeStamp = Date.now();
        await registerPage.registerNewUser(t.ctx.timeStamp);
        
    })
    ('As a new customer I want my account to be protected with a password, so that only people who know the password can access my account', async t => {
        t.timeStamp = Date.now();
        await t
            .typeText(loginPage.emailAddressInput, userInfo.getEmailAddress(t.ctx.timeStamp))
            .typeText(loginPage.passwordInput, `${userInfo.pwd}1`)
            .click(loginPage.submitButton)
            .expect(loginPage.wrongCredsMessage.exists).ok('Wrong credentials warning didn\'t show up')
            .selectText(loginPage.passwordInput)
            .pressKey('delete')
            .typeText(loginPage.passwordInput, userInfo.pwd)            
            .click(loginPage.submitButton)
            .expect(mainPage.getWelcomeHeader(userInfo.getFirstName(t.ctx.timeStamp), userInfo.getLastName(t.ctx.timeStamp)).exists).ok('Login failed');
    });
