'use strict';
const data = {
    id: 3000
};
console.log(Reflect.isExtensible(data)); // true
Reflect.preventExtensions(data);
console.log(Reflect.isExtensible(data)); // false
