'use strict';
class Car {
    constructor() {
        this.id = 3000;
    }
}

const r = new Car();
console.log(Reflect.get(r, 'id')); // 3000