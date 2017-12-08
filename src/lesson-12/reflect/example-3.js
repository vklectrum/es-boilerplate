'use strict';
class Car {
    constructor(model, color) {
        console.log(`Model is ${ model }, color is ${ color }.`);
    }
}

const r = Reflect.construct(Car, ['Audi', 'red']); // Model is Audi, color is red.