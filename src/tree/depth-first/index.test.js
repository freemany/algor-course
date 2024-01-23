import { buildBinaryTree, insertDepthFirst, searchDepthFirst } from './index.js';

QUnit.module('Search', () => {
  QUnit.test('should find depth first', (assert) => {
    const bTree = {
      value: 5,
      left: {
        value: 3,
        left: {
          value: 2,
        },
        right: {
          value: 4,
        },
      },
      right: {
        value: 10,
        left: {
          value: 7,
          left: {
            value: 6,
          },
        },
      },
    };

    assert.equal(searchDepthFirst(bTree, 6), true);
    assert.equal(searchDepthFirst(bTree, 4), true);
    assert.equal(searchDepthFirst(bTree, 1), false);
  });

  QUnit.test('should insert depth first', (assert) => {
    const bTree = {
      value: 50,
      left: {
        value: 30,
        left: {
          value: 20,
        },
        right: {
          value: 40,
        },
      },
      right: {
        value: 100,
        left: {
          value: 70,
          left: {
            value: 60,
          },
        },
      },
    };

    assert.deepEqual(insertDepthFirst(bTree, 80), {
      value: 50,
      right: { value: 100, left: { value: 70, right: { value: 80 }, left: { value: 60 } } },
      left: { value: 30, left: { value: 20 }, right: { value: 40 } },
    });
    assert.deepEqual(insertDepthFirst(bTree, 70), {
      value: 50,
      right: { value: 100, left: { value: 70, left: { value: 60 } } },
      left: { value: 30, left: { value: 20 }, right: { value: 40 } },
    });
  });
});
