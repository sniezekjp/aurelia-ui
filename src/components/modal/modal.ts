import {inject, customElement} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import $ = require('jquery');

export class ModalEvent {
    type = 'toggle';
    viewModel;
    vm: string;
    title: string;
}

@inject(EventAggregator, Element)
@customElement('modal')
export class Modal {
    public modalElm;
    public element;
    public eventAggregator;
    public event;

    constructor(eventAggregator, element) {
        this.element = element;
        this.eventAggregator = eventAggregator;
        this.eventAggregator.subscribe(ModalEvent, (modalEvent) => {
            this.event = modalEvent;
            $(this.modalElm).modal();
        });
    }

    bind() {
        if(!this.modalElm) {
            this.modalElm = $(this.element).find('.modal');
        }
    }
}
