const sex = ['male', 'female'];

export default (entity)=> {
    if (typeof entity.id !== 'number') {
        throw new Error("Wrong parameter! Parameter ID should be a number type.");
    }
    if (typeof entity.firstName !== 'string') {
        throw new Error("Wrong parameter! Parameter firstName should be a string type.");
    }
    if (typeof entity.lastName !== 'string') {
        throw new Error("Wrong parameter! Parameter lastName should be a string type.");
    }
    if (typeof entity.age !== 'number' || entity.age < 18) {
        console.log(entity.age);
        throw new Error("Wrong parameter! Parameter age should be a number type and more than 17.");
    }
    if(typeof entity.sex !=='string' || sex.indexOf(entity.sex)==-1){
        throw new Error("Wrong parameter! Parameter sex should be a string type and take value of [male, famale].");
    }
}