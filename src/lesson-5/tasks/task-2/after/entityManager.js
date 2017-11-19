'use strict';

import {isEntityValid} from './validator';

const Entity = function (obj) {
    isEntityValid(obj);
    this.id = obj.id;
    this.firstName = obj.firstName;
    this.lastName = obj.lastName;
    this.age = obj.age;
    this.sex = obj.sex;
}

Entity.prototype.getEntity = function () {
    return {
        id: this.id,
        firstName: this.firstName,
        lastName: this.lastName,
        age: this.age,
        sex: this.sex
    }
}

export default Entity;