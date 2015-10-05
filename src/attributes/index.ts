/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    [
        'logger',
        'tooltip'
    ].forEach(function(attribute) {
            config.globalResources(`./${attribute}/${attribute}`);
        });
}