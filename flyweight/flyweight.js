class Sentence {

    constructor(text) {
        this.text = text;
        this.words = text.split(' ')
            .map(word => { return { word, capitalize: false } });
    }

    at(index) {
        return this.words[index]
    }

    toString() {
        return this.words
            .map(word => word.capitalize ? word.word.toUpperCase() : word.word)
            .join(' ')

    }
}
