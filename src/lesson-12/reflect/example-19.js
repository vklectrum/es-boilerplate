'use strict';
const data = {
    id: 3000
};
Reflect.preventExtensions(data);
data.name = 'data'; // TypeError
