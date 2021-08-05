// the one who fires the event is the observable, the observer is the one who watches for the observable events

class Event {
    constructor() {
        this.handlers = new Map();
        this.count = 0;
    }

    subscribe(handler) {
        this.handlers.set(++this.count, handler);
        return this.count;
    }

    unsubscribe(idx) {
        this.handlers.delete(idx);
    }

    fire(sender, args) {
        this.handlers.forEach(function (v, k) {
            v(sender, args);
        });
    }
}

class Game {
    constructor() {
        this.dieRatEvent = new Event();
    }


}

class Rat {
    constructor(game) {
        this._attack = 1;
        this.game = game;
        this.dieToken = this.game.dieRatEvent.subscribe(
            this.handleDie.bind(this)
        );
    }

    handleDie(sender) {
        if (sender == this) {
            this.game.dieRatEvent.unsubscribe(this.dieToken);
        }
    }

    die() {
        this.game.dieRatEvent.fire(this);
    }

    get attack() {
        return this.game.dieRatEvent.handlers.size;
    }
}

