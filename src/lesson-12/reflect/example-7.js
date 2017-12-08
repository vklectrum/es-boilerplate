'use strict';
class Transport {
    constructor() {
        console.log('Transport constructor');
    }
}

class Car extends Transport {

}

console.log(Reflect.getPrototypeOf(Car)) // [Function: Transport]