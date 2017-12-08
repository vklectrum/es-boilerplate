'use strict';
class Car {
    constructor(model, color) {
        console.log(`new.target: ${ new.target }`);
    }
}

function carMaker() {
    console.log('in carMaker');
}

const r = Reflect.construct(Car, ['Audi', 'red'], carMaker);