/**
 * Queue Implementation in JS.
 */

 class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        let node = new Node(value);
        this.top = node;
        this.bottom = node;
        this.length = 1;
    }

    enqueue = value => {
        if(this.top && this.bottom) {
            let node = this.bottom;
            this.bottom = new Node(value);
            node.next = this.bottom;
            this.length++;
        }
    }

    dequeue = () => {
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

let queue = new Queue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
console.log("Array: ", queue.toArray());
console.log("Length: ", queue.length);
console.log("Peek: ", queue.peek());
queue.dequeue();
queue.dequeue();
console.log("Array: ", queue.toArray());
console.log("Length: ", queue.length);
console.log("Peek: ", queue.peek());
queue.enqueue(6);
queue.enqueue(7);
console.log("Array: ", queue.toArray());
console.log("Length: ", queue.length);
console.log("Peek: ", queue.peek());
queue.dequeue();
console.log("Array: ", queue.toArray());
console.log("Length: ", queue.length);
console.log("Peek: ", queue.peek());
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(queue.toArray());
console.log(queue.length);
console.log(queue.peek());
