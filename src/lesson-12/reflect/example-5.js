'use strict';
class Car {
    constructor() {
        this.id = 33;
    }

    show() {
        console.log(this.id);
    }
}

Reflect.apply(Car.prototype.show, { id: 99 }, []);