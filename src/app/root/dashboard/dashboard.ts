import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {openModal} from '../../../components/modal/modal';
import $ = require('jquery');

@inject(Router, Element, EventAggregator)
export class Dashboard {
    public router;
    public elm;
    public eventAggregator;

    constructor(router, element, aggregator) {
        this.router = router;
        this.elm = element;
        this.eventAggregator = aggregator;
    }

    openSettingsModal(e) {
        e.preventDefault();
        openModal(this, 'Settings', 'app/root/settings/settings', this.eventAggregator);
    }

    openProfileModal(e) {
        e.preventDefault();
        openModal(this, 'Profile', 'app/root/profile/profile', this.eventAggregator);
    }

    openLoginModal(e) {
        e.preventDefault();
        openModal(this, 'Login', 'app/login/login', this.eventAggregator);
    }
}
