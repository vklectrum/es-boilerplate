'use strict';

export default ({id, firstName, surName, lastName, sex})=>{
    if (typeof id !== 'number') {
        throw new Error("Wrong parameter! Parameter ID should be a number type.");
    }
    if (typeof firstName !== 'string') {
        throw new Error("Wrong parameter! Parameter firstName should be a string type.");
    }
    if (typeof surName !== 'string') {
        throw new Error("Wrong parameter! Parameter lastName should be a string type.");
    }
    if (typeof lastName !== 'string') {
        throw new Error("Wrong parameter! Parameter lastName should be a string type.");
    }
    if(typeof sex !=='string'){
        throw new Error("Wrong parameter! Parameter sex should be a string type.");
    }
}
export function ageValid(age){
    if(typeof age !== 'number'){
        throw new Error("Wrong parameter! Parameter age should be a number type.");
    }
}

