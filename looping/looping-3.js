// Destructure nested data structure into two variables whit the strings 'red' and 'orange'

var suspects = [
    {
        name: 'Rusty',
        color: 'orange'
    }, {
        name: 'Ms. Scarlet',
        color: 'red'
    }
];

let [{ color: red }, { color: orange }] = suspects;

console.log(red, orange);