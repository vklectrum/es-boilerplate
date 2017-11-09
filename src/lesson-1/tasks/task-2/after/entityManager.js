'use strict';

function Entity(entity){
    this.entity = entity;
}

Entity.prototype.getEntity = function(){
    return this.entity;
}

export {Entity}