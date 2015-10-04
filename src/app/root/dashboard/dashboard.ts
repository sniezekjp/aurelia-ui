import {Router} from 'aurelia-router';
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import {ModalEvent} from '../../../components/modal/modal';
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
        var modalEvent = new ModalEvent();
        modalEvent.type = 'open';
        modalEvent.viewModel = this;
        modalEvent.title = "Settings";
        modalEvent.vm = 'app/root/settings/settings';
        this.eventAggregator.publish(modalEvent);
    }

    openProfileModal(e) {
        e.preventDefault();
        var modalEvent = new ModalEvent();
        modalEvent.type = 'open';
        modalEvent.viewModel = this;
        modalEvent.title = "Profile";
        modalEvent.vm = 'app/root/profile/profile';
        this.eventAggregator.publish(modalEvent);
    }
}
