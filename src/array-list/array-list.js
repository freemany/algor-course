export class ArrayList extends Array {
  constructor() {
    super();
  }

  add(item) {
    this.push(item);

    return this;
  }

  removeLast() {
    return this.pop();
  }

  remove(index) {
    if (this.length - 1 < index || index < 0) {
      return;
    }

    return this.splice(index, 1)[0];
  }

  clear() {
    this.length = 0;
  }

  removeDuplicated() {
    const result = [...new Set(this)];
    this.clear();
    this.push(...result);

    return this;
  }
}
