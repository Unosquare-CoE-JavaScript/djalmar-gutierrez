class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    toString() {
        console.log(`id = ${this.id}, name = ${this.name}`);
    }
}

class PersonFactory {
    constructor() {
        this.currentId = 0;
    }

    createPerson(name) {
        return new Person(this.currentId++, name);
    }
}

let pf = new PersonFactory();

let person1 = pf.createPerson('Juan');
let person2 = pf.createPerson('Pedro');
let person3 = pf.createPerson('Pedro');

console.log(person1);
console.log(person2);
console.log(person3);