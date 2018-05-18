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

    removeFirst () {
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head){
            return;
        }

        if (!this.head.next){
            this.head = null;
            return;
        }

        let prev = this.head
        let node = this.head.next;
        
        while (node.next) {
            prev = node;
            node = node.next;
        }
        prev.next = null;
    }

}

module.exports = { Node, LinkedList };
