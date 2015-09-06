/// <reference path="../../app.d.ts" />
import {inject} from 'aurelia-framework';

@inject(Element)
export class Root {
    items = [
        {viewModel:'../tester/tester', title: 'Title 1'},
        {viewModel: '../tester/tester', title: 'Title 2'}
    ];

    tabs = [
        {viewModel:'app/login/login', title: 'Tab 1'},
        {viewModel: '../login/login', title: 'Tab 2'},
        {viewModel: '../login/login', title: 'Tab 3'}
    ];

    modal = {
        viewModel: '../login/login'
    };

    dropdown = [
        {title: 'Item 1'},
        {title: 'Item 2'},
        {title: 'Item 3'}
    ];

    element;

    constructor(element) {
        this.element = element;
    }

    activate() {
        console.log('activate');
        console.log(this.element);
        this.element.classList.add('root');
    }

    deactivate() {
        console.log('deactivate');
        this.element.classList.remove('root');
        console.log(this.element);
    }
}

