/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
     config.globalResources('./accordion/accordion');
     config.globalResources('./modal/modal');
     config.globalResources('./tabs/tabs');
     config.globalResources('./tester/tester');
}