//can use multiple builders, can have fluent interface


class ClassGenerator {
  constructor(className) {
    this.className = className;
    this.attributes = [];
  }

  toStringImpl() {
    let classString = `class ${this.className} {\n`;
    let constructorParameters = this.attributes.join(', ');
    if (constructorParameters.length > 0) {
      classString += `  constructor(${constructorParameters}) {\n`
      let constructorAttributes = this.attributes
        .reduce((prev, attr) => prev += `    this.${attr} = ${attr};\n`, '')
      classString += constructorAttributes;
      classString += `  }\n`
    }
    classString += `}`
    return classString;
  }
}

class CodeBuilder {
  constructor(className) {
    this.class = new ClassGenerator(className);
    this.className = className;
  }

  addField(fieldName) {
    this.class.attributes.push(fieldName);
    return this;
  }

  toString() {
    return this.class.toStringImpl();
  }
}


let cb = new CodeBuilder('Person');
cb.addField('name').addField('age');

console.log(cb.toString());


