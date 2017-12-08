'use strict';
class Transport {
    constructor() {
        this.type = 'transport';
    }
}

class Car extends Transport {
    constructor() {
        super();
        this.id = 3000;
    }
}

const r = new Car();
console.log(Reflect.has(r, 'id')); // true
console.log(Reflect.has(r, 'type')); // true