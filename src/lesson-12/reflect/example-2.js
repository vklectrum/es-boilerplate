'use strict';
class Car {
}

const r = Reflect.construct(Car, []);
console.log(r instanceof Car); // true