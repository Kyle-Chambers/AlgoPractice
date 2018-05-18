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
        let node = this.head;
        while (node){
            nodeCount++;
            node = node.next;
        }
        return nodeCount;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        let node = this.head;
        while(node.next){
            node = node.next;
        }
        return node;
    }

    clear () {
        this.head = null;
    }


}

module.exports = { Node, LinkedList };
