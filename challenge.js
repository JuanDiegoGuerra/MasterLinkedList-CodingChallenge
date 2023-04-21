// Start with your code from last challenge.
class Node {
    constructor(value, next_node = null) {
      this.value = value;
      this.next_node = next_node;
    }
  }
  
  class LinkedList {
  
    add(number) {
      }

      getLast() {
      }

      getAt(index) {
      }

    addAt(index, element) {
    }

    remove(index) {
       }
    
  
    get(index) {
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
