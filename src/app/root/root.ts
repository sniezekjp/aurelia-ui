/// <reference path="../../app.d.ts" />
import {inject} from 'aurelia-framework';

export class Root {
    public router;

    configureRouter(config, router) {
        this.router = router;
        config.map([
            {route: 'dashboard', name: 'dashboard', moduleId: './dashboard/dashboard', title: 'Dashboard'},
            {route: 'settings', name: 'settings', moduleId: './settings/settings', title: 'Settings'}
        ]);

        config.mapUnknownRoutes(instruction => {
            instruction.config.redirect = 'dashboard';
        });
    }
}

