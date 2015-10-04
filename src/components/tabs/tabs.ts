import {customElement, bindable, inject} from 'aurelia-framework';
import {Toggle, ToggleManager} from '../../lib/ui/toggle';

@customElement('tabs')
@inject(ToggleManager)
export class Tabs {
    @bindable items = [];
    manager: ToggleManager;

    /**
     * Configure the toggle manager
     *
     * @param manager
     */
    constructor(manager) {
        this.manager = manager;
    }

    /**
     * On bind, set the toggles provided by the parent view model
     */
    bind() {
        this.manager.setToggles(this.items);
        this.manager.toggles[0].open();
    }
}