import {Selector} from 'testcafe';

class MainPage {
    getWelcomeHeader (fName, lName) {
        return Selector('h3').withText(new RegExp(`Welcome.{2}${fName} ${lName}`))
    }
}

export const mainPage = new MainPage();

