'use strict';
class Car {
    constructor() {
        this.id = 33;
    }

    show(prefix) {
        console.log(prefix + this.id);
    }
}

Reflect.apply(Car.prototype.show, { id: 99 }, ['Value: ']);