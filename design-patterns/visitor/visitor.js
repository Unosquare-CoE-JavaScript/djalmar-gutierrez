
class Integer {
    constructor(value) {
        this.value = value;
    }
}

class BinaryExpression {
    constructor(lhs, rhs) {
        this.lhs = lhs;
        this.rhs = rhs;
    }
}

class AdditionExpression extends BinaryExpression {
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }
}

class MultiplicationExpression extends BinaryExpression {
    constructor(lhs, rhs) {
        super(lhs, rhs);
    }
}

class ExpressionPrinter {
    constructor() {
        this.buffer = []
    }

    visitValue(value) {
        this.buffer.push(value.value);
    }

    visitAddition(ae) {
        this.buffer.push('(')
        if (ae.lhs instanceof AdditionExpression) {
            this.visitAddition(ae.lhs)
        } else if (ae.lhs instanceof MultiplicationExpression) {
            this.visitMultiplication(ae.lhs)
        } else this.visitValue(ae.lhs)
        this.buffer.push('+')
        if (ae.rhs instanceof AdditionExpression) {
            this.visitAddition(ae.rhs)
        } else if (ae.rhs instanceof MultiplicationExpression) {
            this.visitMultiplication(ae.rhs)
        } else this.visitValue(ae.rhs)
        this.buffer.push(')')
    }

    visitMultiplication(ae) {
        if (ae.lhs instanceof AdditionExpression) {
            this.visitAddition(ae.lhs)
        } else if (ae.lhs instanceof MultiplicationExpression) {
            this.visitMultiplication(ae.lhs)
        } else this.visitValue(ae.lhs)
        this.buffer.push('*')
        if (ae.rhs instanceof AdditionExpression) {
            this.visitAddition(ae.rhs)
        } else if (ae.rhs instanceof MultiplicationExpression) {
            this.visitMultiplication(ae.rhs)
        } else this.visitValue(ae.rhs)
    }

    toString() {
        return this.buffer.join('');
    }
}
