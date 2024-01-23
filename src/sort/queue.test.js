import { Queue } from './queue.js';

QUnit.module('Queue', () => {
  QUnit.test('should queue', (assert) => {
    const queue = new Queue();
    queue.enqueue(1).enqueue(2);
    assert.equal(queue.getTail()?.next, undefined);
    assert.equal(queue.getTail()?.value, 2);

    queue.dequeue();
    assert.equal(queue.length, 1);

    queue.enqueue(2).enqueue(3).enqueue(4);
    assert.equal(queue.get(999), -1);
    assert.equal(queue.get(4), 3);
  });
});
