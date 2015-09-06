import {customElement, bindable, inject} from 'aurelia-framework';
import {Toggle, ToggleManager} from 'lib/ui/toggle';

@customElement('dropdown')
@inject(Toggle)
export class Dropdown {
    @bindable items = [];
    @bindable name = '';

    bind() {
        // this.manager.setToggles(this.items);
    }
}