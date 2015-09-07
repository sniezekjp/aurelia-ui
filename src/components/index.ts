/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
     [
         'accordion',
         'calendar',
         'carousel',
         'date',
         'date-range',
         'directions',
         'dropdown',
         'login',
         'modal',
         'navigation',
         'navigation-bar',
         'newsletter',
         'pagination',
         'popover',
         'post',
         'progress-bar',
         'signin',
         'tabs',
         'tool-tip',
         'user-details',
         'weather'
     ].forEach(function(component) {
          config.globalResources(`./${component}/${component}`);
     });
}