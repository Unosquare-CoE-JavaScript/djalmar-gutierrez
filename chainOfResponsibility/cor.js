

let WhatToQuery = Object.freeze({
    'attack': 1,
    'defense': 2
});

class Query {
    constructor(creatureName, whatToQuery, value) {
        this.whatToQuery = whatToQuery;
        this.value = value;
    }
}

class Game {
    constructor() {
        this.goblins = [];
    }
}


class Goblin {

    constructor(game, name) {
        this.name = name
        this.game = game;
        this.game.goblins.push(this);
        this.initial_attack = 1;
        this.initial_defense = 1;
    }

    handle(sender, query) {
        if (sender !== this) {
            if (query.whatToQuery == WhatToQuery.defense) {
                query.value++;
            }
        }
    }

    get attack() {
        let q = new Query(this.name, WhatToQuery.attack, 0);
        this.game.goblins.forEach(goblin => goblin.handle(this, q))
        return q.value + this.initial_attack;
    }

    get defense() {
        let q = new Query(this.name, WhatToQuery.defense, 0);
        this.game.goblins.forEach(goblin => goblin.handle(this, q))
        return q.value + this.initial_defense;
    }

    toString() {
        return `Goblin (${this.attack}/${this.defense})`
    }

}


class GoblinKing extends Goblin {

    constructor(game) {
        super(game, 12);
        this.initial_defense = 3;
        this.initial_attack = 3;
    }

    handle(sender, query) {
        if (sender != this) {
            if (query.whatToQuery == WhatToQuery.attack) {
                query.value++;
            }
            if (query.whatToQuery == WhatToQuery.defense) {
                query.value++;
            }
        }
    }
}


let game = new Game();

let goblin = new Goblin(game, 123);
console.log(goblin.toString())
let goblin2 = new Goblin(game, 4444);
let goblin3 = new GoblinKing(game);
console.log(goblin.toString())




