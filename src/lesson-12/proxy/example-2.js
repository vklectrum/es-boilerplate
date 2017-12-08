'use strict';
function Employee() {
    this.name = 'John';
    this.salary = 0;
};

const e = new Employee();

const p = new Proxy(e, {
   get: function(target, property, receiver) {
       return Reflect.get(target, property, target);
   }
})

console.log(p.name); // John
console.log(p.salary); // 0