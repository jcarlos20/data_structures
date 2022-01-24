class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(9);
const n6 = new Node(11);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;

const maxPairList = (head) => {
    let fast = head;
    let slow = head;
    let current = head;
    let result = [];

    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next;
    }
    slow = reverse(slow);
    while(slow != null){
        let sum = slow.val + current.val;
        result.push(sum);
        slow = slow.next;
        current = current.next;
    }
    return result;
}

const reverse = (head) =>{
    let current = head;
    let prev = null;
    while(current!=null){
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
}

console.log(maxPairList(n1))