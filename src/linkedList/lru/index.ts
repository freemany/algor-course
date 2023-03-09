type TNode = {
  key: string;
  value: number;
  prev?: TNode;
  next?: TNode;
};

const createNode = (key: string, value: number): TNode => {
  return {
    value,
    key,
  };
};

export default class LruLinkedList {
  private length: number;
  private head: TNode | null;
  private tail: TNode | null;

  constructor(private capacity = 10) {
    this.capacity = capacity;
    this.length = 0;
    this.head = this.tail = null;
  }

  getHead(): TNode | null {
    return this.head;
  }

  getTail(): TNode | null {
    return this.tail;
  }

  toArray() {
    const result: { value: number; key: string }[] = [];
    let node = this.head as TNode | null;
    while (node) {
      result.push({ value: node.value, key: node.key });
      node = node.next as TNode | null;
    }

    return result;
  }

  get(key: string, value?: number): number | undefined {
    const node = this.findAndMoveFront(key);
    if (node) {
      return node.value;
    }
    if (value === undefined) {
      return;
    }
    const newNode = createNode(key, value);
    if (this.length >= this.capacity) {
      this.pop();
    }
    this.unshift(newNode);

    return value;
  }

  update(key: string, value: number): boolean {
    const node = this.findAndMoveFront(key, false);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  delete(key: string): boolean {
    const node = this.findAndMoveFront(key, false);
    if (node) {
      this.remove(node);
      return true;
    }

    return false;
  }

  private unshift(node: TNode): LruLinkedList {
    this.length++;
    if (this.length === 1) {
      this.head = this.tail = node;

      return this;
    }

    const head = this.head as TNode;
    head.prev = node;
    node.next = head;
    this.head = node;

    return this;
  }

  private pop(): LruLinkedList {
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;

      return this;
    }

    this.tail = (this.tail as TNode).prev as TNode;
    this.tail.next = undefined;

    return this;
  }

  private remove(node: TNode): LruLinkedList {
    this.length--;
    const prev = node.prev as TNode;
    const next = node.next as TNode;

    if (!next) {
      this.tail = prev;
      prev.next = undefined;
    } else {
      next.prev = prev;
    }
    if (!prev) {
      this.head = next;
      next.prev = undefined;
    } else {
      prev.next = next;
    }

    return this;
  }

  private moveFront(node: TNode): TNode {
    this.remove(node).unshift(node);

    return node;
  }

  private findAndMoveFront(key: string, moveFront = true): TNode | null {
    let node = this.head;
    while (node) {
      if (node.key === key) {
        return moveFront ? this.moveFront(node) : node;
      }
      node = node.next as TNode;
    }

    return null;
  }
}
