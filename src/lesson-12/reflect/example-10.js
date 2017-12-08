'use strict';
class Car {
    constructor() {
        this._id = 3000;
    }

    get id() {
        return this._id;
    }
}

const r = new Car();
console.log(Reflect.get(r, 'id', { _id: 99 })); // 99