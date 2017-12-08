'use strict';
class Car {
}

const data = {
    getId() {
        return 99;
    }
}

const r = new Car();
Reflect.setPrototypeOf(r, data);

console.log(r.getId()); // 99