import validator from './validator';

const data = [];

export const getEntities = () => data;

export const getEntityById = (id) => {
    if (typeof id !== 'number') {
        throw new Error('Wrong  parameters! Parameter Id should be a number type.');
    }
    const entity = data.filter((current) => current.id === id);
    return entity;
}

export const getFirstEntity = () => data.length ? data[0] : null;

export const getLastEntity = () => data.length ? data[data.length - 1] : null;

export const getCount = () => data.length;

export const addEntity = (entity) => {
    validator(entity);
    if (data.filter((current) => current.id === entity.id).length){
        throw new Error("Wrong parameter! Parameter ID is already present.");
    }
    data.push(entity);
}

export const filter = (callback = (val) => val) => {
    const entities = data.filter(callback);
    return entities;
}