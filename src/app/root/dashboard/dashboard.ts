import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';

@inject(Router)
export class Dashboard {
    public router;

    constructor(router) {
        this.router = router;
    }
}
