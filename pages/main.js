import {Selector} from 'testcafe';
import * as sharedSelectors from '../sharedSelectors';

class MainPage {
    constructor () {
        this.myAccountButton = Selector('a').withAttribute('href', '/my-account');
        this.uploadButton = Selector('span').withAttribute('role', 'button');
        this.uploader = Selector('input').withAttribute('type', 'file');
        this.submitButton = sharedSelectors.submitButton;
        this.uploadedAvatar = Selector('p').withText('ryu_avatar.jpg');
        this.avatarURL = Selector('img').withAttribute('src', /ryu_avatar.jpg$/);
        this.changesSavedMessage = Selector('div').withAttribute('class','MuiAlert-message').withText('Profile successfully updated');
    }
    getWelcomeHeader (fName, lName) {
        return Selector('h3').withText(new RegExp(`Welcome.{2}${fName} ${lName}`))
    }
}

export const mainPage = new MainPage();
