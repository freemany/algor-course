type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

export class Stack<T> {
  public length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): Stack<T> {
    const node = { value: item, prev: this.head } as SNode<T>;
    this.length++;
    if (!this.head) {
      this.head = node;
    }
    node.prev = this.head;
    this.head = node;

    return this;
  }

  pop(): T | undefined {
    if (this.length === 0) {
      this.head = undefined;
      return;
    }

    this.length--;
    const preHead = this.head as SNode<T>;
    this.head = this.head?.prev;

    return preHead.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}
