'use strict';
const data = {
    id: 3000
};

const { proxy, revoke } = Proxy.revocable(data, {
    get: function(target, property, receiver) {
        return Reflect.get(target, property, receiver) + 1000;
    }
});

console.log(proxy.id); // 4000
revoke();
console.log(proxy.id); // TypeError