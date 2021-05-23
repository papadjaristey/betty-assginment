import {Selector, t} from 'testcafe';
import {loginPage} from './login';
import * as sharedSelectors from '../sharedSelectors';
import {userInfo} from '../config'

class RegisterPage {
    constructor() {
        this.firstNameInput = Selector('input').withAttribute('name', 'first_name');
        this.lastNameInput = Selector('input').withAttribute('name', 'last_name');
        this.emailAddressInput = sharedSelectors.emailAddressInput;
        this.passwordInput = sharedSelectors.passwordInput;        
        this.submitButton = sharedSelectors.submitButton;
        this.createdMessage = Selector('div').withAttribute('class','MuiAlert-message').withText('Your account has been created, you can now login here');
        
    }
    async registerNewUser(timeStamp) {
        await t
            .click(loginPage.registerButton)
            .typeText(this.firstNameInput, userInfo.getFirstName(timeStamp))
            .typeText(this.lastNameInput, userInfo.getLastName(timeStamp))
            .typeText(this.emailAddressInput, userInfo.getEmailAddress(timeStamp))
            .typeText(this.passwordInput, userInfo.pwd)
            .click(this.submitButton);
    }
}

export const registerPage = new RegisterPage();

