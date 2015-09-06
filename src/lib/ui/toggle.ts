import {inject, transient} from 'aurelia-framework';

/**
 * Toggle
 */
export class Toggle {
    data;
    isOpen = false;

    constructor(data?) {
        this.data = data;
    }

    /**
     * Open
     *
     * @returns {Toggle}
     */
    open() {
        this.isOpen = true;
        return this;
    }

    /**
     * Close
     *
     * @returns {Toggle}
     */
    close() {
        this.isOpen = false;
        return this;
    }

    /**
     * Toggle
     *
     * @returns {Toggle}
     */
    toggle() {
        this.isOpen = !this.isOpen;
        return this;
    }
}

/**
 * ToggleManager
 */
@transient()
export class ToggleManager {
    toggles: Array<Toggle> = [];
    active: Toggle;
    multipleOpens: boolean;

    /**
     * Configure multiple opens
     *
     * @param config
     */
    allowMultipleOpens(config: boolean) {
        this.multipleOpens = config;
    }

    /**
     * Set toggles
     *
     * @param data
     */
    setToggles(data: Array<Object>) {
        data.forEach((newToggle) => {
           this.toggles.push(new Toggle(newToggle));
        });
    }

    /**
     * Open toggle
     *
     * @param toggle
     * @returns {ToggleManager}
     */
    open(toggle: Toggle) {
        toggle.open();
        if(!this.multipleOpens) {
            this.toggles.forEach((_toggle) => {
                if(_toggle === toggle) { return; }
                _toggle.close();
            });
        }
        return this;
    }

    /**
     * Toggle on/off a given toggle
     *
     * @param toggle {Toggle}
     * @returns {ToggleManager}
     */
    toggle(toggle: Toggle) {
        var action = toggle.isOpen ? 'close' : 'open';
        return this[action](toggle);
    }

    /**
     * Close toggle
     *
     * @param toggle
     * @returns {ToggleManager}
     */
    close(toggle: Toggle) {
        toggle.close();
        return this;
    }

    /**
     * Close all toggles
     *
     * @returns {ToggleManager}
     */
    closeAll() {
        this.toggles.forEach((toggle) => {
            toggle.close();
        });
        return this;
    }

    /**
     * Open all toggles
     *
     * @returns {ToggleManager}
     */
    openAll() {
        if(this.multipleOpens) {
            this.toggles.forEach((toggle) => {
                toggle.open();
            });
        }
        return this;
    }
}