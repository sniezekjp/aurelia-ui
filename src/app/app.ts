/// <reference path="../../typings/tsd.d.ts"/>
import 'thomaspark/bootswatch/superhero/bootstrap.css!';
import {Redirect} from 'aurelia-router';
import $ = require('jquery');
import {User} from '../lib/user/user';

console.log(User);

export class App {
    public router;

    configureRouter(config, router) {

        this.router = router;

        config.map([
            {route: 'v1', name: 'v1', moduleId: './root/root', title: 'Application Name'},
            {route: 'login', name: 'login', moduleId: './login/login', title: 'Login'},
            {route: [''], redirect: 'login'}
        ]);

        config.mapUnknownRoutes(instruction => {
            instruction.config.redirect = 'v1';
        });
    }
}