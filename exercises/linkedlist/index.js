// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    insertFirst(value) {
        this.head = new Node(value, this.head);
    }

    size () {
        let nodeCount = 0;
        let current = this.head;
        while (current){
            nodeCount++;
            current = current.next;
        }
        return nodeCount;
    }
}

module.exports = { Node, LinkedList };
