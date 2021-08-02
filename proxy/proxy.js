// value proxy use classes to represent kinda primitive values
// property proxy adds a wrapper(setter does other things) to a ordinary value


class Person {
    constructor(age) {
        this.age = age;
    }
    drink() {
        return 'drinking';
    }
    drive() {
        return 'driving';
    }

    driveAndDrink() {
        return this.drink() + ' ' + this.drive();
    }
}

class ResponsiblePerson {
    constructor(person) {
        this.person = person;
    }

    drink() {
        return this.person.age < 18 ? this.person.drink() : 'too young';
    }

    drive() {
        return this.person.age < 16 ? this.person.drive() : 'too young';
    }

    drinkAndDrive() {
        return 'dead';
    }
}
