export class Stack {
  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item) {
    const node = { value: item, prev: this.head };
    this.length++;
    if (!this.head) {
      this.head = node;
    }
    node.prev = this.head;
    this.head = node;

    return this;
  }

  pop() {
    if (this.length === 0) {
      this.head = undefined;
      return;
    }

    this.length--;
    const preHead = this.head;
    this.head = this.head?.prev;

    return preHead.value;
  }

  peek() {
    return this.head?.value;
  }
}
