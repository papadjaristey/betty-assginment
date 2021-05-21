import {Selector} from 'testcafe';

export const emailAddressInput  = Selector('input').withAttribute('name', 'email_address');
export const passwordInput      = Selector('input').withAttribute('name', 'password');
export const submitButton       = Selector('button').withAttribute('type','submit');
