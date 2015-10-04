/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
     [
         'nav-bar',
     ].forEach(function(component) {
          config.globalResources(`./${component}/${component}`);
     });
}