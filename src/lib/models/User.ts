import {BaseModel} from '../base/BaseModel';

export class User extends BaseModel {
    endpoint = '/user';
    username;
    email;
    password;
    passwordConfirm;

    resetPassword() { return this; }
    unsubscribe() { return this; }
    login() { return this; }
}