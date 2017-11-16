'use strict';

const sex = ['male', 'female'];

export default ({id, firstName, lastName, age, sex} = entity)=> {
    if (typeof id !== 'number') {
        throw new Error("Wrong parameter! Parameter ID should be a number type.");
    }
    if (typeof firstName !== 'string') {
        throw new Error("Wrong parameter! Parameter firstName should be a string type.");
    }
    if (typeof lastName !== 'string') {
        throw new Error("Wrong parameter! Parameter lastName should be a string type.");
    }
    if (typeof age !== 'number' || age < 18) {
        console.log(age);
        throw new Error("Wrong parameter! Parameter age should be a number type and more than 17.");
    }
    if(typeof sex !=='string' || sex.indexOf(sex)==-1){
        throw new Error("Wrong parameter! Parameter sex should be a string type and take value of [male, famale].");
    }
}