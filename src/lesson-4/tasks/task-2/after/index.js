'use strict';

export default ()=> new Timer();

function Timer() {
    this.timerId = null,
        this.time = {
            "seconds": 0,
            "minutes": 0
        }
}

Timer.prototype.init = function ({begin:startsWith = 0, callback = (val)=>val}) {
    if(typeof startsWith !=='number'){
        throw new Error("Wrong  parameter. Parameters startsWith should be a number type.");
    }
    this.time.minutes = Math.floor(startsWith / 60);
    this.time.seconds = startsWith % 60;
    callback();
};

Timer.prototype.start = function ({speed = 1, callback=(val)=>val}) {
    if(typeof speed !=='number'){
        throw new Error("Wrong  parameter. Parameters speed should be a number type.");
    }
    let timeOut = Math.trunc(1000 / speed);
    this.timerId = setInterval((time) => {
        if (time.seconds < 60)
            time.seconds++;
        else {
            time.minutes++;
            time.seconds = 0;
        };
        callback(time);
    }, timeOut, this.time);
};

Timer.prototype.pause = function ({callback=(val)=>val}) {
    clearInterval(this.timerId);
    callback(this.time);
};

Timer.prototype.stop = function ({callback=(val)=>val}) {
    clearTimeout(this.timerId);
    callback(this.time);
    this.time.seconds = 0;
    this.time.minutes = 0;
}