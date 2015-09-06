/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    config.globalResources('./logger/logger');
}