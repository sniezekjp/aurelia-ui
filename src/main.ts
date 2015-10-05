/// <reference path="./app.d.ts" />
import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

import {LogManager} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

import {Client} from './lib/user/user';

Client.name = "some company";

export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('attributes')
        .feature('components')
        .feature('aurelia-flux');

    LogManager.addAppender(new ConsoleAppender());
    LogManager.setLevel(LogManager.logLevel.info);

    aurelia.start().then(a => a.setRoot('app/app'));
}