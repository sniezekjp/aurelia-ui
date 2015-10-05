import {bindable, inject, customAttribute} from 'aurelia-framework';
import $ = require('jquery');

@customAttribute('tooltip')
@inject(Element)
export class Tooltip {

    constructor(element) {
        $(element).tooltip();
    }
}