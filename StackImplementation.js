/**
 * Stack Implementation in JS.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor(value) {
        let node = new Node(value);
        this.top = node;
        this.bottom = node;
        this.length = 1;
    }

    push = value => {
        if(this.top && this.bottom) {
            let node = this.top;
            this.top = new Node(value);
            this.top.next = node;
            this.length++;
        }
    }

    pop = () => {
        if(this.top && this.bottom) {
            if(this.top === this.bottom) {
                this.top = null;
                this.bottom = null;
                this.length = 0;
                return;
            }
            this.top = this.top.next;            
            this.length--;
        }
    }

    peek = () => {
        if(this.top) {
            return this.top.value;
        }
    }

    isEmpty = () => {
        if(!this.top || !this.bottom || !this.length) {
            return true;
        }
        return false;
    }

    toArray = () => {
        if(this.top && this.bottom) {
            let node = this.top;
            let nodeArray = [];
            while(node != null) {
                nodeArray.push(node.value);
                node = node.next;
            }
            return nodeArray;
        }
    }
}

let stack = new Stack(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log("Array: ", stack.toArray());
console.log("Length: ", stack.length);
console.log("Peek: ", stack.peek());
stack.pop();
stack.pop();
console.log("Array: ", stack.toArray());
console.log("Length: ", stack.length);
console.log("Peek: ", stack.peek());
stack.push(6);
stack.push(7);
console.log("Array: ", stack.toArray());
console.log("Length: ", stack.length);
console.log("Peek: ", stack.peek());
stack.pop();
console.log("Array: ", stack.toArray());
console.log("Length: ", stack.length);
console.log("Peek: ", stack.peek());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.pop();
console.log("Array: ", stack.toArray());
console.log("Length: ", stack.length);
console.log("Peek: ", stack.peek());
