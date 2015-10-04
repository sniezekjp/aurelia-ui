import {customElement, bindable, inject} from 'aurelia-framework';
import {CssAnimator} from 'aurelia-animator-css';
import {Toggle, ToggleManager} from '../../lib/ui/toggle';

@customElement('modal')
@inject(Element, CssAnimator)
export class Modal {
    @bindable data = null;
    toggle: Toggle;
    element;
    animator;
    bg;
    modal;

    constructor(element, animator) {
        this.element = element;
        this.animator = animator;
    }

    bind() {
        this.toggle = new Toggle(this.data);
    }
}