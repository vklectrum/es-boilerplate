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
console.log(Reflect.ownKeys(r)); // [ 'type', 'id' ]