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

    insertLast(value) {
        if (!this.head){
            this.insertFirst(value);
            return;
        }

        let node = this.head;

        while (node.next) {
            node = node.next;
        }

        node.next = new Node(value);
    }

    getAt(index) {
        let i = 0;
        let node = this.head;
        while (node){
            if (i === index){
                return node;
            }
            node = node.next;
            i++;
        }
        return null;
    }

    removeAt(index) {
        if (!this.head){
            return;
        }

        if (index === 0){
            this.head = this.head.next;
            return;
        }

        let prev = this.getAt(index -1);

        if (!prev || !prev.next) {
            return;
        }

        prev.next = prev.next.next;
    }

    insertAt(val, index) {
        if (!this.head){
            this.insertFirst(val);
            return;
        }

        if (index === 0){
            this.head = new Node(val, this.head);
            return;
        }

        let prev = this.getAt(index -1) || this.getLast();
        let node = new Node(val, prev.next);
        prev.next = node;


    }
}

module.exports = { Node, LinkedList };
