export type Node = {
  data: number;
  next: Node | null;
  prev: Node | null;
};

export class DoubleLinkedList {
  private length: number;
  public head: null | Node;
  public tail: null | Node;

  constructor() {
    this.length = 0;
    this.head = this.tail = null;
  }

  createNode(data: number): Node {
    return {
      data,
      next: null,
      prev: null,
    };
  }

  append(item: number): DoubleLinkedList {
    this.length++;
    const node = this.createNode(item);
    if (!this.head && !this.tail) {
      this.head = node;
      this.tail = this.head;

      return this;
    }

    const last = this.tail as Node;
    last.next = node;
    node.prev = last;
    this.tail = node;

    return this;
  }

  prepend(item: number): DoubleLinkedList {
    this.length++;

    if (!this.head && !this.tail) {
      this.append(item);

      return this;
    }
    const node = this.createNode(item);
    const first = this.head as Node;
    first.prev = node;
    node.next = first;
    this.head = node;

    return this;
  }

  insertAt(index: number, item: number): DoubleLinkedList {
    if (index < 0 || index > this.length - 1) {
      throw new Error('Out of range');
    }

    this.length++;
    if (!this.head && !this.tail) {
      this.append(item);

      return this;
    }

    const node = this.createNode(item);
    let current = this.head as Node;
    for (let i = 0; i < index; i++) {
      current = current.next as Node;
    }
    const prevCurrent = current.prev as Node;
    prevCurrent.next = node;
    node.prev = prevCurrent;
    current.prev = node;
    node.next = current;

    return this;
  }

  removeAt(index: number): DoubleLinkedList {
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

    let current = this.head as Node;
    for (let i = 0; i < index; i++) {
      current = current.next as Node;
    }
    const prevCurrent = current.prev as Node;
    prevCurrent.next = current.next;
    if (current.next) {
      current.next.prev = prevCurrent;
    }

    return this;
  }

  getLength(): number {
    return this.length;
  }

  clear() {
    this.length = 0;
    this.head = this.tail = null;

    return this;
  }

  getFromHead(index: number): number | undefined | null {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (!this.head) {
      return null;
    }

    let current = this.head as Node;
    for (let i = 0; i < index; i++) {
      current = current.next as Node;
    }

    return current.data;
  }

  getFromTail(index: number): number | undefined | null {
    if (index < 0 || index >= this.length) {
      return undefined;
    }

    if (!this.tail) {
      return null;
    }

    let current = this.tail as Node;
    for (let i = 0; i < index; i++) {
      current = current.prev as Node;
    }

    return current.data;
  }
}
