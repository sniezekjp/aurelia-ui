export class JsonValueConverter {
    toView(data) {
        return JSON.stringify(data, null, 2);
    }
}