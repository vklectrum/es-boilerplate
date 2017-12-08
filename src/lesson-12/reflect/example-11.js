'use strict';
class Car {
    constructor() {
        this.id = 3000;
    }
}

const r = new Car();
Reflect.set(r, 'id', 99);
console.log(r.id); // 99