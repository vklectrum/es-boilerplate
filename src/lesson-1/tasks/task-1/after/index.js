'use strict';

export function func(quantity, timeOut, callback) {
    for (let i = 1; i <= quantity; i++) {
        setTimeout(function() {
          console.log(callback(i));
        }, i * timeOut);
    }
}

