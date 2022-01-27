class Node{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treeMin = (root) => {
    const stack = [root];
    let smallest = Infinity;
    while(stack.length > 0){
        let current = stack.pop();
        if(current.val < smallest) smallest = current.val;
        if(current.left != null) stack.push(current.left);
        if(current.right != null) stack.push(current.right);
    }
    return smallest;
}
// console.log(treeMin(a))

const treeMin_Recursive = (root) => {
    if(root === null) return Infinity;
    let leftMin = treeMin_Recursive(root.left);
    let rightMin = treeMin_Recursive(root.right);
    return Math.min(root.val, leftMin, rightMin);
}