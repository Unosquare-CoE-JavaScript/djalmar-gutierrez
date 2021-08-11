const { _ } = require('../seudoUnderscore');

const createSuspectObject = (name) => {
    return {
        name,
        color: name.split(' ')[1],
        speak() { console.log(`My name is ${name}`) }
    };
}


var suspects = ['Miss Scarlet', 'Colonel Mustard', 'Mr. White'];

var suspectObjectList = _.map(suspects, (suspect) => createSuspectObject(suspect));

console.table(suspectObjectList);

