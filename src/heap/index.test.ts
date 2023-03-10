import MinHeap from '.';

describe('Heap', () => {
  it('should add', () => {
    const heap = new MinHeap();
    heap.add(1);
    expect(heap.data).toStrictEqual([1]);
    heap.add(10).add(2).add(9);
    expect(heap.data).toStrictEqual([1, 9, 2, 10]);
    heap.add(100).add(7).add(18).add(3);
    expect(heap.data).toStrictEqual([1, 3, 2, 9, 100, 7, 18, 10]);
  });
  it('should pop', () => {
    const heap = new MinHeap();
    heap.add(1).add(10).add(2).add(9).add(100).add(7).add(18).add(3);
    heap.pop();
    expect(heap.data).toStrictEqual([2, 3, 7, 9, 100, 10, 18]);
    heap.pop();
    expect(heap.data).toStrictEqual([3, 9, 7, 18, 100, 10]);
  });
});
