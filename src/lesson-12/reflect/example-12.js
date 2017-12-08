'use strict';
class Car {
    constructor() {
        this._id = 3000;
    }
    set id(value) {
        this._id = value;
    }
}

const r = new Car();
const alternative = { id: 99 };
Reflect.set(r, '_id', 99, alternative);
console.log(r._id); // 3000
console.log(alternative._id); // 99