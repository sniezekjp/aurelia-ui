/// <reference path="../../typings/tsd.d.ts"/>
import {Redirect} from 'aurelia-router';

export class App {
    public router;

    configureRouter(config, router) {
        this.router = router;
        var rootPrefix = 'root';
        config.map([
            {route: rootPrefix, name: 'root', moduleId: './root/root', title: 'HII'},
            {route: 'login', name: 'login', moduleId: './login/login'},
            {route: [''], redirect: rootPrefix}
        ]);

        config.mapUnknownRoutes(instruction => {
            instruction.config.redirect = rootPrefix;
        });
    }
}