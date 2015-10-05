import {inject, customElement, Container} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import $ = require('jquery');

export function openModal(viewModel, title, vm, eventAggregator) {
    var modalEvent = new ModalEvent();
    modalEvent.type = 'open';
    modalEvent.viewModel = viewModel;
    modalEvent.title = title;
    modalEvent.vm = vm;
    eventAggregator.publish(modalEvent);
}

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
