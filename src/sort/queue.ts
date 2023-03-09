type Node<T> = {
  value: T;
  next?: Node<T>;
};

export class Queue<T> {
  public length: number;
  private head?: Node<T> | undefined;
  private tail?: Node<T> | undefined;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): Queue<T> {
    const node = { value: item } as Node<T>;
    if (!this.tail) {
      this.tail = this.head = node;
    }
    this.length++;

    this.tail.next = node;
    this.tail = node;

    return this;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return;
    }
    this.length--;
    const preHead = this.head;
    this.head = this.head.next;

    return preHead.value;
  }

  peak(): T | undefined {
    return this.head?.value;
  }

  getTail() {
    return this.tail;
  }

  getHead() {
    return this.head;
  }

  get(haystack: number): number {
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
