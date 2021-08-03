
class Creature {
    constructor(age) {
        this.age = age;
    }

    fly() {
        return this.age > 1;
    }

    crawl() {
        return this.age > 1;
    }
}

class Bird extends Creature {
    constructor(age) {
        super(age);
    }
}


class Lizard extends creature {
    constructor(age) {
        super(age);
    }
}

class Dragon extends Creature {
    constructor(creature, age) {
        super(age);
        this.creature = creature;
        this.age = age;
    }
}
