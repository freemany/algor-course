import { getTree, getBinaryNodePath, searchBreadthFirst, searchBF, compareBreadthFirst, compareBF } from '.';

describe('Tree', () => {
  it('should travase', () => {
    const tree = {
      value: 1,
      children: [
        { value: 12, children: [] },
        { value: 13, children: [{ value: 131, children: [{ value: 1231, children: [] }] }] },
      ],
    };

    expect(getTree(tree)).toStrictEqual(tree);
  });

  it('should binary traverse', () => {
    const bTree = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 }, right: { value: 44 } },
    };

    expect(getBinaryNodePath(bTree, 'node')).toStrictEqual([1, 2, 3, 4, 22, 33, 44]);
    expect(getBinaryNodePath(bTree, 'deep-left')).toStrictEqual([3, 2, 4, 1, 33, 22, 44]);
    expect(getBinaryNodePath(bTree, 'node-last')).toStrictEqual([3, 4, 2, 33, 44, 22, 1]);
  });

  it('should breadth first binary search', () => {
    const bTree = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 }, right: { value: 44, right: { value: 444 } } },
    };

    expect(searchBreadthFirst(bTree, 44, 'left')).toBe(true);
    expect(searchBreadthFirst(bTree, 4, 'left')).toBe(true);
    expect(searchBreadthFirst(bTree, 99, 'left')).toBe(false);
    expect(searchBreadthFirst(bTree, 2, 'right')).toBe(true);
    expect(searchBreadthFirst(bTree, 4, 'right')).toBe(true);
    expect(searchBreadthFirst(bTree, 99, 'right')).toBe(false);
    expect(searchBreadthFirst(bTree, 44, 'horizon')).toBe(true);

    expect(searchBF(bTree, 44)).toBe(true);
    expect(searchBF(bTree, 4)).toBe(true);
    expect(searchBF(bTree, 999)).toBe(false);
  });

  it('should compare binary tree', () => {
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

    expect(compareBreadthFirst([bTree, bTree1], 'left')).toBe(true);
    expect(compareBF([bTree, bTree1])).toBe(true);

    const bTree2 = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 339999 }, right: { value: 44, right: { value: 444 } } },
    };

    expect(compareBreadthFirst([bTree, bTree2], 'left')).toBe(false);
    expect(compareBF([bTree, bTree2])).toBe(false);

    const bTree3 = {
      value: 1,
      left: { value: 2, left: { value: 3 }, right: { value: 4 } },
      right: { value: 22, left: { value: 33 } },
    };

    expect(compareBreadthFirst([bTree, bTree3], 'left')).toBe(false);
    expect(compareBF([bTree, bTree3])).toBe(false);
    expect(compareBreadthFirst([bTree3, bTree], 'left')).toBe(false);
    expect(compareBF([bTree3, bTree])).toBe(false);

    const bTree4 = {
      value: 1,
      left: { value: 2 },
      right: { value: 3 },
    };
    const bTree5 = {
      value: 1,
      left: { value: 2, left: { value: 3 } },
    };
    expect(compareBF([bTree4, bTree5])).toBe(false);
    expect(compareBreadthFirst([bTree4, bTree5], 'left')).toBe(false);
  });
});
