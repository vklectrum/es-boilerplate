'use strict';

import * as validator from './validator';

export function DataManager() {
    this.data = [];
    this.getEntities = ()=> { return this.data; };
    this.getEntityById = (id) => {
        if (typeof id !== 'number') {
            throw new Error('Wrong  parameters! Parameter Id should be a number type.');
        }
        const entity = this.data.filter(({ id: propId } = current) => propId === id);
        return entity;
    };
    this.getFirstEntity = () => this.data.length ? this.data[0] : null;
    this.getLastEntity = () => this.data.length ? this.data[this.data.length - 1] : null;
    this.getCount = () => this.data.length;
    this.add = (entity, { id: paramId } = entity) =>{
        validator.isEntityValid(entity);
        if (this.data.filter(({ id }) => id === paramId).length) {
            throw new Error("Wrong parameter! Parameter ID is already present.");
        }
        this.data.push(entity);
    };
    this.filter = (callback = (val) => val) => {
        validator.isFunctionValid(callback);
        const entities = this.data.filter(callback);
        return entities;
    }
}
