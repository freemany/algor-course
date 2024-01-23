export class DoubleLinkedList {
  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  createNode(data) {
    return {
      data,
      next: null,
      prev: null,
    };
  }

  append(item) {
    this.length++;
    const node = this.createNode(item);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = this.head;

      return this;
    }

    const last = this.tail;
    last.next = node;
    node.prev = last;
    this.tail = node;

    return this;
  }

  prepend(item) {
    this.length++;

    if (!this.head && !this.tail) {
      this.append(item);

      return this;
    }
    const node = this.createNode(item);
    const first = this.head;
    first.prev = node;
    node.next = first;
    this.head = node;

    return this;
  }

  insertAt(index, item) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Out of range');
    }

    this.length++;
    if (!this.head && !this.tail) {
      this.append(item);

      return this;
    }

    const node = this.createNode(item);
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    const prevCurrent = current.prev;
    prevCurrent.next = node;
    node.prev = prevCurrent;
    current.prev = node;
    node.next = current;

    return this;
  }

  removeAt(index) {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Out of range');
    }

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;

      return this;
    }
    if (this.length === 0) {
      this.head = null;
      this.tail = null;

      return this;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    const prevCurrent = current.prev;
    prevCurrent.next = current.next;
    if (current.next) {
      current.next.prev = prevCurrent;
    }

    return this;
  }

  getLength() {
    return this.length;
  }

  clear() {
    this.length = 0;
    this.head = this.tail = null;

    return this;
  }

  getFromHead(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (!this.head) {
      return null;
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.data;
  }

  getFromTail(index) {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (!this.tail) {
      return null;
    }

    let current = this.tail;
    for (let i = 0; i < index; i++) {
      current = current.prev;
    }

    return current.data;
  }
}
