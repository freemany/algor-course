export class Queue {
  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item) {
    const node = { value: item };
    if (!this.tail) {
      this.tail = this.head = node;
    }
    this.length++;

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  dequeue() {
    if (!this.head) {
      return;
    }
    this.length--;
    const preHead = this.head;
    this.head = this.head.next;

    return preHead.value;
  }

  peak() {
    return this.head?.value;
  }

  getTail() {
    return this.tail;
  }

  getHead() {
    return this.head;
  }

  get(haystack) {
    let current = this.head;
    let index = 0;
    do {
      if (current?.value === haystack) {
        return index;
      }
      index++;
      current = current?.next;
    } while (current);
    return -1;
  }
}
