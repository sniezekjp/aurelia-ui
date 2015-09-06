import {customElement, bindable, inject} from 'aurelia-framework';
import {Toggle, ToggleManager} from 'lib/ui/toggle';

@customElement('accordion')
@inject(ToggleManager)
export class Accordion {
    @bindable items = [];
    active;
    manager: ToggleManager;

    /**
     * Configure the toggle manager
     *
     * @param manager
     */
    constructor(manager) {
        this.manager = manager;
        this.manager.allowMultipleOpens(true);
    }

    /**
     * On bind, set the toggles provided by the parent view model
     */
    bind() {
        this.manager.setToggles(this.items);
    }
}