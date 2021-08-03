// finite state machines

class CombinationLock {
    constructor(combination) {
        this.status = 'LOCKED'
        this.combination = combination;
        this.reset();
    }

    reset() {
        this.status = 'LOCKED';
    }

    enterDigit(digit) {
        let strCombination = this.combination.join('');

        this.currentCombination = this.status != 'LOCKED' ?
            this.currentCombination += digit + '' :
            this.currentCombination = digit + ''

        if (this.currentCombination == strCombination) {
            this.status = 'OPEN'
        } else if (this.currentCombination.length >= strCombination.length) {
            this.status = 'ERROR'
        } else {
            this.status = this.currentCombination;
        }


    }
}
