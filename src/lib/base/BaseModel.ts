export class BaseModel {

    static find(where, limit, offset){}
    static findOne(where) {}
    static findById(id) {}

    create() { return this; }
    update() { return this; }
    destroy() { return this; }
}