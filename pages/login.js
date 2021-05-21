import {Selector} from 'testcafe';
import * as sharedSelectors from '../sharedSelectors';

class LoginPage {
    constructor() {
        this.emailAddressInput = sharedSelectors.emailAddressInput;
        this.passwordInput = sharedSelectors.passwordInput;
        this.submitButton = sharedSelectors.submitButton;
        this.registerButton = Selector('a').withAttribute('href', '/new-account');        
        this.createdMessage = Selector('div').withAttribute('class', 'MuiAlert-message').withText('Your account has been created, you can now login here');

    }
}

export const loginPage = new LoginPage();

