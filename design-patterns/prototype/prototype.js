class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    deepCopy() {
        return new Point(this.x, this.y);
    }

    toString() {
        console.log(` x : ${this.x}, y : ${this.y}`);
    }
}

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    deepCopy() {
        return new Line(this.start.deepCopy(), this.end.deepCopy());
    }

    toString() {
        console.log(` start= ${this.start}, end= ${this.end}`);
    }
}
