import {Selector, t} from 'testcafe';
import * as sharedSelectors from '../sharedSelectors';
import {userInfo} from '../config';

class LoginPage {
    constructor() {
        this.emailAddressInput = sharedSelectors.emailAddressInput;
        this.passwordInput = sharedSelectors.passwordInput;
        this.submitButton = sharedSelectors.submitButton;
        this.registerButton = Selector('a').withAttribute('href', '/new-account');        
        this.createdMessage = Selector('div').withAttribute('class', 'MuiAlert-message').withText('Your account has been created, you can now login here');
        this.wrongCredsMessage = Selector('div').withAttribute('class', 'MuiAlert-message').withText('You\'ve entered a wrong email address and/or password');

    }
    async login(timeStamp) {
        await t
            .typeText(loginPage.emailAddressInput, userInfo.getEmailAddress(timeStamp))
            .typeText(loginPage.passwordInput, userInfo.pwd)
            .click(loginPage.submitButton);
    }
}

export const loginPage = new LoginPage();

