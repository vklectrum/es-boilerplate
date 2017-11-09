import {
    addEntity as add,
    getEntities,
    getCount,
    getEntityById,
    getFirstEntity,
    getLastEntity,
    filter
} from '../after/dataManager';

import {Entity} from '../after/entityManager';

// Create instance for man
const man = new Entity({
    id: 7,
    firstName: 'Tomas',
    lastName: 'Anderson',
    age: 32,
    sex: 'male'
});

// Create instance for woman
const woman = new Entity({
    id: 4,
    firstName: 'Lisa',
    lastName: 'Black',
    age: 18,
    sex: 'female'
});

// Get data for man
const firstEntity = man.getEntity();

// Get data for woman
const secondEntity = woman.getEntity();

// Add man to collection
add(firstEntity);

// Add woman to collection
add(secondEntity);

// Get all entities
const all = getEntities();

// Print entities count
const count = getCount();

// Get entity by entity.id
const entityById = getEntityById(4);
console.info("___GET ENTITY BY ID___");
console.log(entityById);

// Get first entity
const first = getFirstEntity();

// Get last entity
const last = getLastEntity();

// Print all entities
console.info("___PRINT ALL___");
console.log(all);

const filtered = filter(function (item) {
    return item.age > 20 && item.sex === 'male'
});
console.info("___PRINT FILTERED___");
console.log(filtered);


 