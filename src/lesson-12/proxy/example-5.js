'use strict';
const data = {
    id: 3000
};

const p = new Proxy({}, {
    get: function(target, property, receiver) {
        return `Property ${ property } doesn't exist `;
    }
});

Object.setPrototypeOf(data, p);

console.log(data.id); // 3000
console.log(data.size); // Property size doesn't exist