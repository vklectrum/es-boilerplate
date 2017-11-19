'use strict';

import entityValid,{ageValid} from './validator';

export function Entity(entity) {
    entityValid(entity);
    this.id = entity.id,
    this.firstName = entity.firstName,
    this.surName = entity.surName,
    this.lastName = entity.lastName,
    this.sex = entity.sex
} 

export const talk = {
    say(){
        console.log(`Hello I'm ${this.id} ${this.firstName} ${this.surName} ${this.lastName} ${this.sex}`);
    },
    sayAge(){
        console.log(`I'm ${this.age} years old!`);
    }
}

export const age = {
    fixAge(age){
        ageValid(age);
        this.age = age;
        console.log(`now I'm ${this.age} years old, let's check it`);
    }
}