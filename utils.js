const debounce = (func, delay = 700) => {
    let timeOutID;
    return (...args) => {
        if(timeOutID){
            clearInterval(timeOutID);
        }
        timeOutID = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};