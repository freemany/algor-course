import { ArrayList } from './array-list.js';

QUnit.module('Array List', () => {
  QUnit.test('should quicker sort asc', (assert) => {
    const list = new ArrayList();
    list.push(1);
    list.push(2);
    assert.equal(list.length, 2);

    list.add(3).add(4);
    assert.equal(list.length, 4);

    assert.equal(list.removeLast(), 4);
    assert.equal(list.length, 3);

    assert.equal(list.remove(1), 2);

    list.add(1).add(4).removeDuplicated();
    assert.deepEqual([...list], [1, 3, 4]);
  });
});
