// const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

const ListNode = require('../extensions/list-node');

class Queue {
  constructor() {
    this.length = 0;
    this.next = null;
  }

  get size() {
    return this.length;
  }

  enqueue(elment) {
    const el = new ListNode(elment);
    if (this.parent) {
      this.next.next = el;
      this.next = el;
    } else {
      this.parent = el;
      this.next = el;
    }

    this.length++;
  }

  dequeue() {
    let res = '';

    if (this.parent) {
      res = this.parent;
      this.parent = this.parent.next;
      this.length--;
    }
    return res.value;
  }
}

module.exports = Queue;
