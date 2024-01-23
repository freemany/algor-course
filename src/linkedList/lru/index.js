const createNode = (key, value) => {
  return {
    value,
    key,
  };
};

export default class LruLinkedList {
  constructor(capacity = 10) {
    this.capacity = capacity;
    this.length = 0;
    this.head = this.tail = null;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  toArray() {
    const result = [];
    let node = this.head;
    while (node) {
      result.push({ value: node.value, key: node.key });
      node = node.next;
    }

    return result;
  }

  get(key, value) {
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

  update(key, value) {
    const node = this.findAndMoveFront(key, false);
    if (node) {
      node.value = value;
      return true;
    }

    return false;
  }

  delete(key) {
    const node = this.findAndMoveFront(key, false);
    if (node) {
      this.remove(node);
      return true;
    }

    return false;
  }

  unshift(node) {
    this.length++;
    if (this.length === 1) {
      this.head = this.tail = node;

      return this;
    }

    const head = this.head;
    head.prev = node;
    node.next = head;
    this.head = node;

    return this;
  }

  pop() {
    this.length--;
    if (this.length === 0) {
      this.head = this.tail = null;

      return this;
    }

    this.tail = this.tail.prev;
    this.tail.next = undefined;

    return this;
  }

  remove(node) {
    this.length--;
    const prev = node.prev;
    const next = node.next;

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

  moveFront(node) {
    this.remove(node).unshift(node);

    return node;
  }

  findAndMoveFront(key, moveFront) {
    let node = this.head;
    while (node) {
      if (node.key === key) {
        return moveFront ? this.moveFront(node) : node;
      }
      node = node.next;
    }

    return null;
  }
}
