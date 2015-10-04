import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Login {

    public router;

    constructor(router) {
        this.router = router;
    }

    login() {
        this.router.navigate('root');
    }
}