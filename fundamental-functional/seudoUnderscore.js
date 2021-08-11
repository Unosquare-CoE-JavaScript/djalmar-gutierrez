const _ = {};

_.each = (array, callback) => {
    for (key in array) {
        callback(array[key], key, array)
    }
}

_.map = (array, callback) => {
    let response = [];
    _.each(array, (value, key, array) => {
        response.push(callback(value, key, array));
    })
    return response;
}

_.filer = (array, callback) => {
    let response = [];
    _.each(array, (value, key, array) => {
        callback(value, key, array) ? response.push(value) : null;
    })
    return response;
}

_.from = (obj) => {
    let response = [];
    _.each(obj, (value, key, array) => {
        response[key] = value;
    })
    return response;
}

_.reduce = (array, callback, acumulator) => {
    _.each(array, (value, key, array) => {
        acumulator = callback(acumulator, value, key);
    })
    return acumulator;
}


module.exports = { _ };