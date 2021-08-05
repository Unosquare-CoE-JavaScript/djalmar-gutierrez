//low level module 
let Relationship = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2
});

class Person {
    constructor(name) {
        this.name = name;
    }
}

class RelationshipBrowser {
    constructor() {
        //dni
    }
    findAllChildrenOf(name) {

    }
}

class Relationships extends RelationshipBrowser {
    constructor() {
        super();
        this.data = [];
    }

    addParentAndChild(parent, child) {
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child
        });
    }

    findAllChildrenOf(name) {
        return this.data
            .filter(d => d.from.name == name && d.type == Relationship.parent)
            .map(r => r.to);
    }
}



// high level

class Research {
    constructor(browser) {
        let relations = browser.findAllChildrenOf('Jhon');
        for (let rel of relations) {
            console.log(`Jhon is father of ${rel.name}`)
        }
    }
}



let parent = new Person('Jhon')
let son1 = new Person('Juan')
let son2 = new Person('Pedro')

let rels = new Relationships();
rels.addParentAndChild(parent, son1);
rels.addParentAndChild(parent, son2);

let res = new Research(rels);
