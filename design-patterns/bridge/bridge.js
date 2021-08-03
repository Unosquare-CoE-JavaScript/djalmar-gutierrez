class VectorRenderer {

    toString(shapeName) {
        console.log(`Drawing ${shapeName} as lines`);
    }
}

class RasterRenderer {
    toString(shapeName) {
        console.log(`Drawing ${shapeName} as pixels`)
    }
}

class Shape {
    constructor(renderer, shapeName) {
        this.renderer = renderer;
        this.shapeName = shapeName;
    }

    toString() {
        this.renderer.toString(this.shapeName);
    }
}

class Triangle extends Shape {
    constructor(renderer) {
        super(renderer, 'Triangle');
    }
}
class Square extends Shape {
    constructor(renderer) {
        super(renderer, 'square');
    }
}

class Shape
{
    constructor(name, renderer)
    {
        this.renderer = renderer;
        this.name = name;
    }

    toString() {
        return this.renderer.toString(this.name);
    }
}


class Triangle extends Shape {
    constructor(renderer){
        super('triangle', renderer);
    }
}

class Square extends Shape {
    constructor(renderer){
        super('square', renderer);
    }
}

class VectorRenderer {

    toString(name) {
        return `Drawing ${name} as lines`;
    }
}
class RasterRenderer {

    toString(name) {
        return `Drawing ${name} as pixels`;
    }
}