'use strict';

import Timer from '../after';

const timer = Timer();

const init = {
    begin: 0,
    callback: () => {
        console.log('Timer is configured.');
    }
};
const start = {
    speed: 1,
    callback: time => {
        const template = `Minutes: ${time.minutes} Seconds: ${time.seconds}`;

        console.log(template);
    }
};
const stop = {
    callback:time => {
        const template = `Last time was Minutes: ${time.minutes} Seconds: ${time.seconds}`;

        console.log('Timer is stopped');
        console.log(template);
    }
}
const pause = {
    callback: time => {
        const template = `Last time was Minutes: ${time.minutes} Seconds: ${time.seconds}`;

        console.log('Timer is frozen');
        console.log(template);
    }
}

timer.init(init);

timer.start(start);

setTimeout(() => {
    timer.pause(pause);
    start.speed = 2;
    timer.start(start);
    setTimeout(() => {
        timer.stop(stop);
    }, 3000);
}, 3000);

