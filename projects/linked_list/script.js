class LinkedList {
    constructor() {
        this.head = null;
    }
    
    
    append(value) {
        const newNode = new Node(value);
        this.link(newNode, this.head);
    }
    
    link(node, previousNode) {
        if (!previousNode) {
            this.head = node;
        }
        if (!previousNode.nextNode) {
            previousNode.nextNode = node;
        }
        else {
            this.link(node,previousNode.nextNode)
        }
    }
}
class Node {
    constructor(value = null, nextnode = null) {
        this.value = value;
        this.nextnode = nextnode;
    }
}

let ll = new LinkedList();
ll.append("bro");
ll.append("sis");
console.log(ll)