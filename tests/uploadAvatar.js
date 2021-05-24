import {registerPage} from '../pages/registeration';
import {loginPage} from '../pages/login';
import {mainPage} from '../pages/main';
import {Selector} from 'testcafe'

fixture `As a user I want to change my avatar, so that I can personalize my account`
    .page `https://ui-test-app.betty.app/login`;

test
    .before(async (t) => {
        t.timeStamp = Date.now();
        await registerPage.registerNewUser(t.timeStamp);
        await loginPage.login(t.timeStamp);
    })
    ('Happy path test', async t => {
        await t
            .click(mainPage.myAccountButton)
            .setFilesToUpload(mainPage.uploader, [
                '../ryu_avatar.jpg'
            ])
            .click(mainPage.uploadButton)
            .click(mainPage.submitButton)
            .expect(mainPage.uploadedAvatar.exists).ok('Avatar image not uploaded')
            .click(mainPage.submitButton)
            .expect(mainPage.changesSavedMessage.exists).ok('Changes not saved');
        await t.eval(() => location.reload(true));
        await t
            .expect(mainPage.avatarURL.exists).ok('Avatar not uploaded')

    });