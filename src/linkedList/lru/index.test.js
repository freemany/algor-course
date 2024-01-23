import LruLinkedList from './index.js';

QUnit.module('LRU', () => {
  QUnit.test('should add, delete and update', (assert) => {
    const l = new LruLinkedList(5);

    assert.deepEqual(l.get('1', 1), 1);
    assert.deepEqual(l.get('2', 2), 2);
    assert.deepEqual(l.get('3', 3), 3);
    assert.deepEqual(l.get('4', 4), 4);
    assert.deepEqual(l.toArray(), [
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
      { key: '1', value: 1 },
    ]);

    assert.deepEqual(l.get('1'), 1);
    assert.deepEqual(l.toArray(), [
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
      { key: '1', value: 1 },
    ]);

    assert.deepEqual(l.get('5', 5), 5);
    assert.deepEqual(l.toArray(), [
      { key: '5', value: 5 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
      { key: '1', value: 1 },
    ]);

    assert.deepEqual(l.get('6', 6), 6);
    assert.deepEqual(l.toArray(), [
      { key: '6', value: 6 },
      { key: '5', value: 5 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
    ]);

    assert.deepEqual(l.get('4'), 4);
    assert.deepEqual(l.toArray(), [
      { key: '6', value: 6 },
      { key: '5', value: 5 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
    ]);

    assert.deepEqual(l.delete('999'), false);
    assert.deepEqual(l.delete('6'), true);
    assert.deepEqual(l.toArray(), [
      { key: '5', value: 5 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
    ]);

    assert.deepEqual(l.update('1', 11), false);
    assert.deepEqual(l.toArray(), [
      { key: '5', value: 5 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
    ]);

    assert.deepEqual(l.update('11111', 11), false);
  });
});
