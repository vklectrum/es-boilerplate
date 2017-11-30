'use strict';

class Timer {
    constructor() {
        this.timerId = null,
            this.time = {
                "seconds": 0,
                "minutes": 0
            }
    }

    init(startsWith = 0, callback = (val) => val) {
        if (typeof startsWith !== 'number') {
            throw new Error("Wrong  parameter. Parameters startsWith should be a number type.");
        }
        if (typeof callback !== 'function') {
            throw new Error("Callback is NOT a function!");
        }
        this.time.minutes = Math.floor(startsWith / 60);
        this.time.seconds = startsWith % 60;
        callback();
    }

    start(speed = 1, callback = (val) => val) {
        if (typeof speed !== 'number') {
            throw new Error("Wrong  parameter. Parameters speed should be a number type.");
        }
        if (typeof callback !== 'function') {
            throw new Error("Callback is NOT a function!");
        }
        let timeOut = Math.trunc(1000 / speed);
        this.timerId = setInterval(() => {
            Timer.changeTime(this.time);
            callback(this.time);
        }, timeOut);
    }

    pause(callback = (val) => val) {
        if (typeof callback !== 'function') {
            throw new Error("Callback is NOT a function!");
        }
        clearInterval(this.timerId);
        callback(this.time);
    }

    stop(callback = (val) => val) {
        if (typeof callback !== 'function') {
            throw new Error("Callback is NOT a function!");
        }
        clearTimeout(this.timerId);
        callback(this.time);
        Timer.clearTime(this.time);
    }

    static clearTime(time) {
        time.seconds = 0;
        time.minutes = 0;
    }

    static changeTime(time) {
        if (time.seconds < 60)
            time.seconds++;
        else {
            time.minutes++;
            time.seconds = 0;
        }
    }
};

export default Timer;
