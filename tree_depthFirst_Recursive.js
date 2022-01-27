class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const depthFirst_Recursive = (root) => {
    if(root === null) return [];
    const leftValues = depthFirst_Recursive(root.left);
    const rightValues = depthFirst_Recursive(root.right);
    return [root.val, ...leftValues, ...rightValues];
}

console.log(depthFirst_Recursive(a))