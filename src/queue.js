const { NotImplementedError } = require('../lib/errors');
const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
  }

  getUnderlyingList() {
    return JSON.parse(JSON.stringify(this.head));
  }

  enqueue(value) {
    if (this.head === null) {
      this.head = new ListNode(value);
      return;
    }

    let curentNode = this.head;

    while (curentNode.next !== null) {
      curentNode = curentNode.next;
    }

    curentNode.next = new ListNode(value);
    return;
  }

  dequeue() {
    if (this.head === null) {
      return undefined;
    }

    if (this.head.next === null) {
      const value = this.head.value;
      this.head.value = undefined;
      return value;
    }

    let value = this.head.value;
    this.head = this.head.next;
    return value;
  }
}

module.exports = {
  Queue
};
