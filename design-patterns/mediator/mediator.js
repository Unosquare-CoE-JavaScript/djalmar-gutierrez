// components that facilitates communication between components that don need to know each other

class Participant {
    constructor(mediator) {
        this.value = 0;
        this.mediator = mediator;
        this.mediator.participants.push(this);
    }

    say(message) {
        this.mediator.broadcast(this, message);
    }

}

class Mediator {

    constructor() {
        this.participants = [];
    }

    broadcast(sender, message) {
        for(let p of this.participants){
            if(sender != p){
                p.value += message;
            }
        }
    }
}

