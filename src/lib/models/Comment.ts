import {BaseModel} from '../base/BaseModel';

export class Comment extends BaseModel {
    post;
    user;
    text;
}