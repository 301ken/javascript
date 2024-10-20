function throttle(func, limit) {
    let lastFunc;
    let lastRan;

    return function(...args) {
        const context = this;

        if (!lastRan || (Date.now() - lastRan) >= limit) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(() => {
                func.apply(context, args);
                lastRan = Date.now();
            }, limit - (Date.now() - lastRan));
        }
    };
}


const log = () => {
    console.log('Function executed at:', new Date().toISOString());
};

const throttledLog = throttle(log, 2000);

setInterval(throttledLog, 500);
