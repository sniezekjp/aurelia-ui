/// <reference path="../../typings/tsd.d.ts" />
import {FrameworkConfiguration} from 'aurelia-framework';

export function configure(config: FrameworkConfiguration) {
    [
        'json',
    ].forEach(function(attribute) {
            config.globalResources(`./${attribute}`);
        });
}