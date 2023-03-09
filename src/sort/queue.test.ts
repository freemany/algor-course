import { Queue } from './queue';

describe('Queue', () => {
  it('should queue', () => {
    const queue = new Queue();
    queue.enqueue(1).enqueue(2);
    expect(queue.getTail()?.next).toBe(undefined);
    expect(queue.getTail()?.value).toBe(2);

    queue.dequeue();
    expect(queue.length).toBe(1);

    queue.enqueue(2).enqueue(3).enqueue(4);
    expect(queue.get(999)).toBe(-1);
    expect(queue.get(4)).toBe(3);
  });
});
