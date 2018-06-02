// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor (data) {
        this.data = data;
        this.children = [];
    }

    add (val) {
        this.children.push(new Node(val));
    }

    remove (val) {
        this.children = this.children.filter((node) => {
            return node.data !== val;
        });
    }
}

class Tree {
    constructor(root = null){
        this.root = root;
    }

  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();

      arr.push(...node.children);
      fn(node);
    }
  }

    // traverseDF(cb, node = this.root) {
    //     cb(node);
    //     node.children.forEach((node) => {
    //         this.traverseBF(cb, node)
    //     });
    // }
}

module.exports = { Tree, Node };
