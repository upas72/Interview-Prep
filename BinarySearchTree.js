/**
 * BST Implementation in JS.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert = value => {
        let node = new Node(value);
        if(this.root) {
            let tempNode = this.root;
            while(true) {
                if(node.value > tempNode.value) {
                    if(tempNode.right) { 
                        tempNode = tempNode.right;
                    } else { 
                        tempNode.right = node;
                        return;
                    }
                } else {
                    if(tempNode.left) { 
                        tempNode = tempNode.left;
                    } else { 
                        tempNode.left = node;
                        return;
                    }
                }
            }
        } else {
            this.root = node;
        }
    }

    lookup = value => {
        let tempNode = this.root;
        while(tempNode && tempNode.value !== value) {
            if(tempNode.value > value) {
                tempNode = tempNode.left;
            }
            if(tempNode.value < value) {
                tempNode = tempNode.right;
            }
        }
        return tempNode;
    }

    traverse = node => {
        if(!node) return;

        const tempNode = { value: node.value };
        tempNode.left = node.left ? this.traverse(node.left) : null;
        tempNode.right = node.right ? this.traverse(node.right) : null;
        return tempNode;
    }

    remove = value => {
        if(!this.root) return;
        if(this.root.value === value) {
            this.root = null;
            return;
        }
        // TODO
    }
}

let tree1 = new BinarySearchTree();
tree1.insert(9);
tree1.insert(4);
tree1.insert(6);
tree1.insert(20);
tree1.insert(170);
tree1.insert(15);
tree1.insert(1);
console.log(JSON.stringify(tree1.traverse(tree1.root)));
console.log(tree1.lookup(4));
console.log(tree1.lookup(15));
console.log(tree1.lookup(7));
let tree2 = new BinarySearchTree();
tree2.insert(9);
tree2.insert(10);
tree2.insert(11);
tree2.insert(6);
tree2.insert(7);
tree2.insert(7);
tree2.insert(8);
console.log(JSON.stringify(tree2.traverse(tree2.root)));