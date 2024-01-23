import MinHeap from './index.js';

QUnit.module('Heap', () => {
  QUnit.test('should add', (assert) => {
    const heap = new MinHeap();
    heap.add(1);
    assert.deepEqual(heap.data, [1]);
    heap.add(10).add(2).add(9);
    assert.deepEqual(heap.data, [1, 9, 2, 10]);
    heap.add(100).add(7).add(18).add(3);
    assert.deepEqual(heap.data, [1, 3, 2, 9, 100, 7, 18, 10]);
  });
  QUnit.test('should pop', (assert) => {
    const heap = new MinHeap();
    heap.add(1).add(10).add(2).add(9).add(100).add(7).add(18).add(3);
    heap.pop();
    assert.deepEqual(heap.data, [2, 3, 7, 9, 100, 10, 18]);
    heap.pop();
    assert.deepEqual(heap.data, [3, 9, 7, 18, 100, 10]);
  });
});
