class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

// Iterative Print
const printLinkedList_Iterative = (head) => {
    let current = head;
    while(current != null){
        console.log(current.val);
        current = current.next
    }
};
// printLinkedList_Iterative(a);

// Recursive Print
const printLinkedList_Recursive = (head) => {
    if(head == null) return;
    console.log(head.val);
    printLinkedList(head.next);
}
// printLinkedList_Recursive(a);


// Get All Elements Iterative
const getAllIterative = (head) => {
    let current = head;
    let allElements = [];
    while(current!=null){
        allElements.push(current.val);
        current = current.next;
    }
    return allElements;
}
// console.log(getAllIterative(a));

// Get All Elements Recursive
const getAllRecursive = (head) => {
    const allElements = [];
    fillInArray(head, allElements)
    return allElements;
}

const fillInArray = (head, allElements) => {
     if(head == null) return;
     allElements.push(head.val);
     fillInArray(head.next, allElements)
}
// console.log(getAllRecursive(a));

const n1 = new Node(2);
const n2 = new Node(8);
const n3 = new Node(3);
const n4 = new Node(7);

n1.next = n2;
n2.next = n3;
n3.next = n4;


// Sum Iterative
const sumElements = (head) =>{
    let current = head;
    let sum = 0;
    while(current!=null){
        sum = sum + current.val;
        current = current.next;
    }
    return sum;
}
// console.log(sumElements(n1))

// Sum recursive
const sumElements_Recursive = (head)=> {
    if(head == null) return 0;
    return head.val + sumElements_Recursive(head.next)
}
// console.log(sumElements_Recursive(n1))

// Find Target Iterative
const findTarget = (head, target) => {
    let current = head;
    while(current != null){
        if(current.val == target){
            return true;
        }
        current = current.next;
    }
    return false;
}
// console.log(findTarget(a, 'G'))

// Find Target Recursive
const findTarget_Recursive = (head, target)=> {
    if (head == null) return false;
    if(head.val == target) return true;
    return findTarget_Recursive(head.next, target);
}
// console.log(findTarget_Recursive(a, 'G'));

// Get Node Iterative
const getNode = (head, index) => {
    let current = head;
    let count = 0;
    while (current != null){
        if(count == index){
            return current.val;
        }
        current = current.next;
        count++;
    }
    return null;
}
// console.log(getNode(a, 3))

const getNode_Recursive = (head, index) => {
    if (head == null) return null;
    if (index == 0) return head.val;
    return getNode_Recursive(head.next, index-1);
}
// console.log(getNode_Recursive(a, 0))

// Reverse Iterative
const reverse = (head) => {
    let prev = null;
    let current = head;
    while(current!=null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}
// console.log(reverse(a))

const reverse_Recursive= (head, prev = null)=> {
    if(head == null) return prev;
    const next = head.next;
    head.next = prev;
    return reverse_Recursive(next, head);
}
// console.log(reverse_Recursive(a))