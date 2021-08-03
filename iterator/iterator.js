class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
        this.parent = null;

        if (this.left)
            left.parent = this;
        if (this.right)
            right.parent = this;
    }

    * preorder() {
        function* traverse(current) {
            yield current.value;
            if (current.left) yield* traverse(current.left);

            if (current.right) yield* traverse(current.right);
        }
        yield* traverse(this);
    }
}



