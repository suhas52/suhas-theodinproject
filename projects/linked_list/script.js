class LinkedList {
    constructor() {
        this.head = null;
    }
    
    
    append(value) {
        const newNode = new Node(value);
        this.link(newNode, this.head);
    }
    
    link(node, previousNode) {
        if (previousNode === null) {
            this.head = node;
        }
        else if (previousNode.nextnode === null) {
            previousNode.nextnode = node;
        }
        else {
            this.link(node, previousNode.nextnode)
        }
    }
    
    prepend(value) {
        const newNode = new Node(value);
        newNode.nextnode = this.head;
        this.head = newNode;
    }
    
    size(node = this.head) {
        if (!node) return 0;              
        return 1 + this.size(node.nextnode);  
    }
    
    getHead() {
        return this.head;
    }
    
    getTail(node = this.head) {
        while (true) {
            if (node.nextnode === null) {
                return node;
            }
            else {
                node = node.nextnode;
            }
        }
    }
    
    at(index, node = this.head, count = 0) {
        while (true) {
            if (index === count) {
                return node;
            }
            else {
                count++;
                node = node.nextnode;
            }
        }
    }
    
    pop(node = this.head) {
        while (true) {
            if (node.nextnode.nextnode === null) {
                node.nextnode = null;
                return;
            }
            else {
                node = node.nextnode;
            }
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
ll.append("test1");
ll.append("test2");
ll.append("test3");
ll.append("test4");
ll.append("test5");
ll.prepend("test0");
ll.append("test6");
console.log(ll.size())
ll.pop();
console.log(ll.size())