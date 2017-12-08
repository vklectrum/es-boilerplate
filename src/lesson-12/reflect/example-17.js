'use strict';
const data = {
    id: 3000
};

const descriptor = Reflect.getOwnPropertyDescriptor(data, 'id');
console.log(descriptor);
// { value: 3000,
//     writable: true,
//     enumerable: true,
//     configurable: true }