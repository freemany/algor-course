import { getTree, getBinaryNodePath, searchBreadthFirst, searchBF, compareBreadthFirst, compareBF } from './index.js';

QUnit.module('Tree', () => {
  QUnit.test('should travase', (assert) => {
    const tree = {
      value: 1,
      children: [
        { value: 12, children: [] },
        { value: 13, children: [{ value: 131, children: [{ value: 1231, children: [] }] }] },
      ],
    };

    assert.deepEqual(getTree(tree), tree);
  });

  QUnit.test('should binary traverse', (assert) => {
    const bTree = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 }, right: { value: 44 } },
    };

    assert.deepEqual(getBinaryNodePath(bTree, 'node'), [1, 2, 3, 4, 22, 33, 44]);
    assert.deepEqual(getBinaryNodePath(bTree, 'deep-left'), [3, 2, 4, 1, 33, 22, 44]);
    assert.deepEqual(getBinaryNodePath(bTree, 'node-last'), [3, 4, 2, 33, 44, 22, 1]);
  });

  QUnit.test('should breadth first binary search', (assert) => {
    const bTree = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 }, right: { value: 44, right: { value: 444 } } },
    };

    assert.equal(searchBreadthFirst(bTree, 44, 'left'), true);
    assert.equal(searchBreadthFirst(bTree, 4, 'left'), true);
    assert.equal(searchBreadthFirst(bTree, 99, 'left'), false);
    assert.equal(searchBreadthFirst(bTree, 2, 'right'), true);
    assert.equal(searchBreadthFirst(bTree, 4, 'right'), true);
    assert.equal(searchBreadthFirst(bTree, 99, 'right'), false);
    assert.equal(searchBreadthFirst(bTree, 44, 'horizon'), true);

    assert.equal(searchBF(bTree, 44), true);
    assert.equal(searchBF(bTree, 4), true);
    assert.equal(searchBF(bTree, 999), false);
  });

  QUnit.test('should compare binary tree', (assert) => {
    const bTree = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 }, right: { value: 44, right: { value: 444 } } },
    };
    const bTree1 = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 }, right: { value: 44, right: { value: 444 } } },
    };

    assert.equal(compareBreadthFirst([bTree, bTree1], 'left'), true);
    assert.equal(compareBF([bTree, bTree1]), true);

    const bTree2 = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 339999 }, right: { value: 44, right: { value: 444 } } },
    };

    assert.equal(compareBreadthFirst([bTree, bTree2], 'left'), false);
    assert.equal(compareBF([bTree, bTree2]), false);

    const bTree3 = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 } },
    };

    assert.equal(compareBreadthFirst([bTree, bTree3], 'left'), false);
    assert.equal(compareBF([bTree, bTree3]), false);
    assert.equal(compareBreadthFirst([bTree3, bTree], 'left'), false);
    assert.equal(compareBF([bTree3, bTree]), false);

    const bTree4 = {
      value: 1,
      left: { value: 2 },
      right: { value: 3 },
    };
    const bTree5 = {
      value: 1,
      left: { value: 2, left: { value: 3 } },
    };
    assert.equal(compareBF([bTree4, bTree5]), false);
    assert.equal(compareBreadthFirst([bTree4, bTree5], 'left'), false);
  });
});
