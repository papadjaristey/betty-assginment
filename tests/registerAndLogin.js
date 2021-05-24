import {registerPage} from '../pages/registeration';
import {loginPage} from '../pages/login';
import {mainPage} from '../pages/main';
import {userInfo} from '../config';

fixture `As a new customer I want to register a new account, so that I can use the application`
    .page `https://ui-test-app.betty.app/login`;

test('Happy path test', async t => {
    t.timeStamp = Date.now();
    await registerPage.registerNewUser(t.timeStamp);
    await t
        .expect(loginPage.createdMessage.exists).ok('Account not created');
    await loginPage.login(t.timeStamp);
    await t
        .expect(mainPage.getWelcomeHeader(userInfo.getFirstName(t.timeStamp), userInfo.getLastName(t.timeStamp)).exists).ok('Login failed');

});
