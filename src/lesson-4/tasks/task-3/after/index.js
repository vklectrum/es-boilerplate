'use strict';

function getInfo({arr0 = [], arr1 = [], arr2 = [], created}={}){
    const totalArr = [...arr0,...arr1,...arr2];
    const max = Math.max(...totalArr);
    const min = Math.min(...totalArr);

    return {
        length: totalArr.length,
        max,
        min
    }
}

export {getInfo}