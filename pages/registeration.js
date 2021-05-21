import {Selector} from 'testcafe';
import * as sharedSelectors from '../sharedSelectors';

class RegisterPage {
    constructor() {
        this.firstNameInput = Selector('input').withAttribute('name', 'first_name');
        this.lastNameInput = Selector('input').withAttribute('name', 'last_name');
        this.emailAddressInput = sharedSelectors.emailAddressInput;
        this.passwordInput = sharedSelectors.passwordInput;        
        this.submitButton = sharedSelectors.submitButton;
        this.createdMessage = Selector('div').withAttribute('class','MuiAlert-message').withText('Your account has been created, you can now login here')
        
    }
}

export const registerPage = new RegisterPage();

