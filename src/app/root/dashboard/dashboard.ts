import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {openModal} from '../../../components/modal/modal';
import {Dispatcher, handle} from 'aurelia-flux';
import DashStore from './dashboard.store';
import $ = require('jquery');

@inject(Router, Element, EventAggregator, Dispatcher, DashStore)
export class Dashboard {
    public router;
    public elm;
    public eventAggregator;
    public dispatcher;

    constructor(router, element, aggregator, dispatcher) {
        this.router = router;
        this.elm = element;
        this.eventAggregator = aggregator;
        this.dispatcher = dispatcher;
    }

    dispatch() {
        console.log('dispatching');
        this.dispatcher.dispatch('test.dispatch', 1,2,3,4);
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
