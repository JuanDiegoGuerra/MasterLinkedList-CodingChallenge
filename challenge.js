// Start with your code from last challenge.
class Node {
  constructor(value, next_node = null) {
    this.value = value;
    this.next_node = next_node;
  }
}

class LinkedList {
  // setup head and tail
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(number) {
    // your code here
    const node = new Node(number);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next_node = node;
      this.tail = node;
    }
    this.length++;   
    }

    getLast() {
      if (!this.head) {
        return null;
      }
      let node = this.head;
      while (node) {
       if (!node.next_node) {
        return node;
       }
       node = node.next_node;
      }
    }

    getAt(index) {
      let counter = 0;
      let node = this.head;
      while (node) {
       if (counter === index) {
        return node;
       }
       counter++;
       node = node.next_node;
      }
     return null;
    }

  addAt(index, element) {
      if (!this.head) {
          this.head = new Node(element);
          return;
        }
    
        if (index === 0) {
          this.head = new Node(element, this.head);
          return;
        }
        const previous = this.getAt(index - 1) || this.getLast();
        const node = new Node(element, previous.next_node);
        previous.next_node = node;
  }

  remove(index) {
      if (!this.head) {
        return;
      }
      if (index === 0) {
        this.head = this.head.next_node;
        return;
      }
      
      const previous = this.getAt(index - 1);
      if (!previous || !previous.next_node) {
        return;
      }
      previous.next_node = previous.next_node.next_node;
     }
  

  get(index) {
    // your code here
    let counter = 0;
    let currentNode  = this.head;
    while (currentNode ) {
     if (counter === index) {
      return currentNode.value;
     }
     counter++;
     currentNode  = currentNode.next_node;
    }
   return currentNode;
    }
  }

const list = new LinkedList()

list.add(3)
list.add(5)
list.addAt(1, 11)
list.addAt(0, 13)

console.log(list.get(2))
// => 11

console.log(list.get(3))
// => 5

module.exports = LinkedList
