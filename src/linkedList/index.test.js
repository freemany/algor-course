import { DoubleLinkedList } from './index.js';

const readDoubleLinkedList = (list) => {
  const result = [];
  let node = list.head;
  if (!node) {
    return result;
  }
  while (node) {
    result.push(node.data);
    node = node.next;
  }

  return result;
};

QUnit.module('Linked list', () => {
  QUnit.test('should double linked list', (assert) => {
    let list = new DoubleLinkedList();
    assert.deepEqual(readDoubleLinkedList(list), [], 'double linked list is empty');
    assert.deepEqual(list.tail, null);

    list = new DoubleLinkedList();
    list.append(0).append(1).append(2).append(3);
    assert.deepEqual(readDoubleLinkedList(list), [0, 1, 2, 3]);
    assert.deepEqual(list.tail.next, null);

    list.prepend(100);
    assert.deepEqual(readDoubleLinkedList(list), [100, 0, 1, 2, 3]);
    assert.deepEqual(list.tail.next, null);

    list.insertAt(1, 99);
    assert.deepEqual(readDoubleLinkedList(list), [100, 99, 0, 1, 2, 3]);
    assert.deepEqual(list.tail.next, null);

    assert.deepEqual(list.getFromHead(1), 99);
    assert.deepEqual(list.getFromTail(2), 1);

    list.removeAt(4);
    assert.deepEqual(readDoubleLinkedList(list), [100, 99, 0, 1, 3]);
    assert.deepEqual(list.getLength(), 5);
    assert.deepEqual(list.tail.next, null);

    list.clear();
    assert.deepEqual(list.head, null);
  });
});
