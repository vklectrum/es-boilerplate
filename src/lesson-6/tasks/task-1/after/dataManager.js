'use strict';

import validator, { entityParamsValidator } from './validator';

const data = [];

export const getEntities = () => data;

export const getEntityById = (id) => {
    if (typeof id !== 'number') {
        throw new Error('Wrong  parameters! Parameter Id should be a number type.');
    }
    const foundEntity = data.find((current) => current.id === id);
    const entity = foundEntity ? foundEntity : null;
    return entity;
}

export const getFirstEntity = () => data.length ? data[0] : null;

export const getLastEntity = () => data.length ? data[data.length - 1] : null;

export const getCount = () => data.length;

export const addEntity = (entity) => {
    validator(entity);
    if (data.find((current) => current.id === entity.id)) {
        throw new Error('Wrong parameter! Parameter ID is already present.');
    }
    data.push(entity);
}

export const filter = (callback = (val) => val) => {
    const entities = data.filter(callback);
    return entities;
}

export const getEntityTotalviews = (id, socialKind = null, callback) => {
    entityParamsValidator(id, socialKind, callback);
    const entity = getEntityById(id);
    const social = entity.social;
    if (!entity) {
        throw new Error(`Entity with ID ${id} is not found!`);
    }
    if (socialKind && callback) {
        return getEntityTotalviewsBySocialKindCallback(social, socialKind, callback);
    };
    if (!socialKind && callback) {
        return getEntityTotalviewsByCallback(social, callback);
    };
    if (socialKind && !callback) {
        return getEntityTotalviewsBySocialKind(social, socialKind);
    };
    return getEntityTotalviewsByAll(social);
}

export const getEntitiesSortedByPopularity = () => {
    const result = data.sort((a, b) => getEntityTotalviews(b.id) - getEntityTotalviews(a.id));
    return result;
};

const getEntityTotalviewsByAll = (social) => {
    const result = social.reduce((accumulator, { views: current }) => accumulator + current, 0);
    return result;
}

const getEntityTotalviewsBySocialKind = (social, socialKind) => {
    const result = social.reduce((accumulator,
        { id: currentId, title: currentTitle, views: currentViews }) => {
        let result;
        if (socialKind.includes(currentId) || socialKind.includes(currentTitle)) {
            result = accumulator + currentViews;
        }
        else {
            result = accumulator;
        }
        return result;
    }, 0);
    return result;
}
const getEntityTotalviewsByCallback = (social, callback) => {
    const total = getEntityTotalviewsByAll(social);
    const result = callback(total);
    return result;
}
const getEntityTotalviewsBySocialKindCallback = (social, socialKind, callback) => {
    const total = getEntityTotalviewsBySocialKind(social, socialKind);
    const result = callback(total);
    return result;
} 
