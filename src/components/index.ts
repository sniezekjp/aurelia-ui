/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
     [
         'accordion',
         'alert',
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
         'notification',
         'pagination',
         'popover',
         'post',
         'progress-bar',
         'signin',
         'tabs',
         'timepicker',
         'tool-tip',
         'user-details',
         'weather'
     ].forEach(function(component) {
          config.globalResources(`./${component}/${component}`);
     });
}