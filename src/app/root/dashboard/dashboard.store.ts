import {handle} from 'aurelia-flux';

export default class DashboardStore {

    @handle('test.*')
    dispatchHandle() {
        console.log(arguments);
    }
}