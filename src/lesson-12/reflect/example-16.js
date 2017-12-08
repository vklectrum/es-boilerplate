'use strict';
const data = {
    id: 3000
};
console.log(data.id); // 3000
Reflect.deleteProperty(data, 'id');
console.log(data.id); // undefined