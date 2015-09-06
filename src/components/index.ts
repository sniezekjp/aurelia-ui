/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
     [
         'accordion',
         'calendar',
         'directions',
         'dropdown',
         'login',
         'modal',
         'navigation',
         'navigation-bar',
         'newsletter',
         'post',
         'signin',
         'tabs',
         'user-details',
         'weather'
     ].forEach(function(component) {
          config.globalResources('./${component}/${component}');
     });
}