export default class MinHeap {
  public length: number;
  public data: number[];

  constructor() {
    this.length = 0;
    this.data = [];
  }

  add(value: number): MinHeap {
    this.data.push(value);
    this.heapifyUp(this.length);
    this.length++;

    return this;
  }
  pop(): number | undefined {
    if (this.length === 0) {
      return;
    }

    const out = this.data[0];
    this.length--;
    if (this.length === 0) {
      this.data = [];

      return out;
    }

    this.data[0] = this.data[this.length];
    this.heapifyDown(0);
    this.data.pop();

    return out;
  }

  private getLeftIndex(index: number) {
    return 2 * index + 1;
  }
  private getRightIndex(index: number) {
    return 2 * index + 2;
  }
  private getParentIndex(index: number) {
    return Math.floor((index - 1) / 2);
  }
  private heapifyUp(index: number): void {
    if (index === 0) {
      return;
    }

    const pIndex = this.getParentIndex(index);
    const pValue = this.data[pIndex];
    const value = this.data[index];

    if (value < pValue) {
      this.data[pIndex] = value;
      this.data[index] = pValue;
      this.heapifyUp(pIndex);
    }
  }
  private heapifyDown(index: number): void {
    const lIndex = this.getLeftIndex(index);
    const rIndex = this.getRightIndex(index);
    if (lIndex >= this.length || rIndex >= this.length) {
      return;
    }
    const lValue = this.data[lIndex];
    const rValue = this.data[rIndex];
    const value = this.data[index];

    if (rValue > lValue && value > lValue) {
      this.data[lIndex] = value;
      this.data[index] = lValue;
      this.heapifyDown(lIndex);
    } else if (lValue > rValue && value > rValue) {
      this.data[rIndex] = value;
      this.data[index] = rValue;
      this.heapifyDown(rIndex);
    }
  }
}
