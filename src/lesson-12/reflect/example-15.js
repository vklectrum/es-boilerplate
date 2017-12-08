'use strict';
class Car {

}

const r = new Car();

Reflect.defineProperty(r, 'id', {
    value: 3000,
    configurable: true,
    enumerable: true
});

console.log(r.id); // 3000