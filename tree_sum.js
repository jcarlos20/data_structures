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

const treeSum = (root) => {
    if(root === null) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}
// console.log(treeSum(a))

const treeSum_Iterative = (root) => {
    if(root === null) return 0;
    const stack = [root];
    let sum = 0;
    while(stack.length > 0){
        let current = stack.pop();
        sum = sum + current.val
        if(current.right) stack.push(current.right);
        if(current.left) stack.push(current.left);
    }
    return sum;
}
console.log(treeSum_Iterative(a))