

class Square {
    constructor(side) {
        this.side = side;
    }
}

function calculateArea(rectangle) {
    return rectangle.width * rectangle.height;
}

class SquareToRectangleAdapter {
    constructor(square) {
        this.width = square.side;
        this.height = square.side;
        return this;
    }
}