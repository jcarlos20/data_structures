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

const breathFirst = (root) => {
    if(root === null) return [];
    let queue = [root];
    let values = [];

    while(queue.length > 0){
        let current = queue.shift();
        values.push(current.val);
        if(current.left != null) queue.push(current.left);
        if(current.right != null) queue.push(current.right);
    }
    return values;
}

console.log(breathFirst(a))