/**
 * Linked List Implementation in JS.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {

    constructor(value) {
        let node = new Node(value);
        this.head = node;
        this.tail = node;
    }

    toArray = () => {
        if(this.head !== null) {
            let node = this.head;
            let listArray = [];
            while(node !== null) {
                listArray.push(node.value);
                node = node.next;
            }
            console.log(listArray);
        }
    }

    push = value => {
        if(this.tail !== null) {
            let node = new Node(value);
            this.tail.next = node;
            this.tail = node;
        }
    }

    unshift = value => {
        if(this.head !== null) {
            let node = new Node(value);
            node.next = this.head;
            this.head = node;
        }
    }

    delete = position => {
        if(this.head !== null && this.tail !== null) {
            let follower = this.head;
            let leader = this.head;    
            let index = 0;
            while(leader !== null) {
                if(index === position) {
                    if(this.head === this.tail) {
                        this.head = null;
                        this.tail = null;
                        leader = null;
                        follower = null;
                        return;
                    } else if(this.head === leader) {
                        this.head = leader.next;
                        leader = null;
                        follower = null;
                        return;
                    } else if(this.tail === leader) {
                        this.tail = follower;
                        this.tail.next = null;
                        leader = null;
                        follower = null;
                        return;
                    } else {
                        follower.next = leader.next;
                        leader = null;
                        follower = null;
                        return;
                    }
                } else {
                    if(leader !== follower) {
                        follower = follower.next;
                    }
                    leader = leader.next;                
                    index++;
                }
            }
        }
    }
}

/**
 * Input: list = 1 -> 2 -> 3 -> 4 -> 5
 * Output: 5 -> 4 -> 3 -> 2 -> 1
 * 
 * Input: list = 1
 * Output: 1
 * 
 * Input: undefined
 * Output: undefined
 */

/**
 * @param {LinkedList} list
 * @return {LinkedList}
 */
const reverseLinkList = function(list) {
    if(!list) {
        return null;
    }
    if(list.head && !list.head.next) {
        return list;
    }
    if(list.head && list.head.next) {
        let leader = list.head.next;
        let follower = list.head;
        while(leader) {
            follower.next = leader.next
            leader.next = list.head
            list.head = leader
            leader = follower.next
        }
        list.tail = follower;
        return list;
    }
};

let list1 = new LinkedList(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
if(list1) {
    console.log(reverseLinkList(list1).toArray() + ":" + list1.head.value + ":" + list1.tail.value);
}
console.log(reverseLinkList(null));
let list2 = new LinkedList(1);
if(list2) {
    console.log(reverseLinkList(list2).toArray() + ":" + list2.head.value + ":" + list2.tail.value);
}
let list3 = new LinkedList(1);
list3.push(2);
if(list3) {
    console.log(reverseLinkList(list3).toArray() + ":" + list3.head.value + ":" + list3.tail.value);
}