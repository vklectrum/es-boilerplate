'use strict';
function getId() {
    console.log(3000);
};

const p = new Proxy(getId, {
    apply: function(target, thisArg, argumentsList) {
        return Reflect.apply(target, thisArg, argumentsList);
    }
});

p();