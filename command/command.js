// command an object wich represents an instruction to an action
let Action = Object.freeze({
    'deposit': 1,
    'withdraw': 2
});
class Account {
    constructor(balance = 0) {
        this.balance = balance;
    }

    process(command) {
        if (command.action == Action.deposit) {
            this.deposit(command.amount);
            command.success = true;
        }
        if (command.action == Action.withdraw) {
            command.success = this.withdraw(command.amount);
        }
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (this.balance - amount >= Account.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

    toString() {
        return `Balance: ${this.balance}`;
    }
}
Account.overdraftLimit = 0;

class Command {
    constructor(action, amount) {
        this.action = action;
        this.amount = amount;
        this.succeeded = false;
    }
}

