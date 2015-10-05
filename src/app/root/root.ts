/// <reference path="../../app.d.ts" />
import {inject} from 'aurelia-framework';

export class Root {
    router;

    configureRouter(config, router) {
        this.router = router;

        config.map([
            {route: 'dashboard', name: 'dashboard', moduleId: './dashboard/dashboard', title: 'Dashboard'},
            {route: 'settings', name: 'settings', moduleId: './settings/settings', title: 'Settings'},
            {route: 'profile', name: 'profile', moduleId: './profile/profile', title: 'Profile'}
        ]);

        config.mapUnknownRoutes(instruction => {
            instruction.config.redirect = 'dashboard';
        });
    }
}

