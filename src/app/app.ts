/// <reference path="../../typings/tsd.d.ts"/>
import {Redirect} from 'aurelia-router';

export class App {
    public router;

    configureRouter(config, router) {
        this.router = router;
        config.map([
            {route: 'root', name: 'root', moduleId: './root/root', title: 'HII'},
            {route: 'login', name: 'login', moduleId: './login/login'},
            {route: [''], redirect: 'login'}
        ]);

        config.mapUnknownRoutes(instruction => {
            instruction.config.redirect = 'root';
        });
    }
}