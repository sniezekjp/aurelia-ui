export class Service {
    makeRequest() {}
}

export class Example {
    hi = 'hello world!';
    isShowing = false;
    service = new Service();

    toggleGreeting() {
        this.isShowing = !this.isShowing;
        this.service.makeRequest();
    }
}
