
let _ = {
    each(array, callback) {
        for (key in array) {
            callback(array[key]);
        }
    }
}

function createSuspectObject(name) {
    return {
        name,
        color: name.split(' ')[1],
        speak() {
            console.log('My name is ', name)
        }
    }
}

var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectsList = [];

_.each(suspects, (suspect) => {
    createSuspectObject(suspect);
})
