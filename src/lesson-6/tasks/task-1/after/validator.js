'use strict';

export default (entity) => {
    const sex = ['male', 'female'];
    if (typeof entity.id !== 'number') {
        throw new Error('Wrong parameter! Parameter ID should be a number type.');
    }
    if (typeof entity.firstName !== 'string') {
        throw new Error('Wrong parameter! Parameter firstName should be a string type.');
    }
    if (typeof entity.lastName !== 'string') {
        throw new Error('Wrong parameter! Parameter lastName should be a string type.');
    }
    if (typeof entity.age !== 'number') {
        throw new Error('Wrong parameter! Parameter age should be a number type.');
    }
    if (entity.age < 18) {
        throw new Error("Wrong parameter! Parameter age should be more than 17.");
    }
    if (typeof entity.sex !== 'string') {
        throw new Error('Wrong parameter! Parameter sex should be a string type.');
    }
    if (sex.find(el => el === entity.sex) === undefined) {
        throw new Error('Wrong parameter! Parameter sex should and take value of [male, famale].');
    }
    if (Array.isArray(entity.social)) {
        const socialArr = entity.social;

        socialArr.forEach(({ id, title, views }) => {
            if (typeof id !== 'number') {
                throw new Error('Wrong parameter! Parameter ID should be a number type.');
            }
            if (typeof title !== 'string') {
                throw new Error('Wrong parameter! Parameter title should be a string type.');
            }
            if (typeof views !== 'number') {
                throw new Error('Wrong parameter! Parameter views should be a number type.');
            }
        });
    }
    else {
        throw new Error('Social object is not an Array!');
    }
}

export const entityParamsValidator = (id, socialKind, callback) => {
    if (id === undefined) {
        throw new Error('Wrong parameter! Parameter ID is underfined.');
    };
    if (socialKind) {
        if (!Array.isArray(socialKind)) {
            throw new Error('Wrong parameter! Social must be an Array.');
        }
    };
    if (callback) {
        if (typeof callback !== 'function') {
            throw new Error('Wrong parameter! Callback must be a function.');
        }
    };
}