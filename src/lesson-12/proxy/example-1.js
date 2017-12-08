'use strict';
function Employee() {
    this.name = 'John';
    this.salary = 0;
};

const e = new Employee();

const p = new Proxy(e, {
   get: function(target, property, receiver) {
       return `You have no access to prop ${ property }`;
   }
})

console.log(p.name); // You have no access to prop name
console.log(p.salary); // You have no access to prop salary