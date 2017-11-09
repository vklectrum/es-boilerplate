'use strict';

const persons = [];

function addEntity(entity){
    persons.push(entity);
}

function getEntities(){
    return persons;
}

function getCount(){
    return persons.length;
}

function getEntityById(id){
    return persons.find((el)=>el.id==id);
}

function getFirstEntity(){
    return persons[0];    
}

function getLastEntity(){
    return persons[persons.length-1];
}

function filter(filter){
    return persons.filter(filter);
}

export {addEntity, getEntities, getCount, getEntityById, getFirstEntity, getLastEntity, filter};