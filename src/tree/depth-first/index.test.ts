import { buildBinaryTree, insertDepthFirst, searchDepthFirst } from '.';

describe('Search', () => {
  it('should find depth first', () => {
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

    expect(searchDepthFirst(bTree, 6)).toBe(true);
    expect(searchDepthFirst(bTree, 4)).toBe(true);
    expect(searchDepthFirst(bTree, 1)).toBe(false);
  });

  it('should build binary tree', () => {
    expect(buildBinaryTree([4, 6, 7, 2, 1, 9, 0])).toStrictEqual({
      value: 4,
      left: { value: 2, left: { value: 1, left: { value: 0 } } },
      right: { value: 6, right: { value: 7, right: { value: 9 } } },
    });
    expect(buildBinaryTree([4, 1, 17, 2, 11, 9, 10, 5, 6, 7, 12, 1, 19, 0])).toStrictEqual({
      value: 4,
      left: { value: 1, left: { value: 1, left: { value: 0 } }, right: { value: 2 } },
      right: {
        value: 17,
        left: {
          value: 11,
          left: { value: 9, left: { value: 5, right: { value: 6, right: { value: 7 } } }, right: { value: 10 } },
          right: { value: 12 },
        },
        right: { value: 19 },
      },
    });
  });

  it('should insert depth first', () => {
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

    expect(insertDepthFirst(bTree, 80)).toStrictEqual({
      value: 50,
      right: { value: 100, left: { value: 70, right: { value: 80 }, left: { value: 60 } } },
      left: { value: 30, left: { value: 20 }, right: { value: 40 } },
    });
    expect(insertDepthFirst(bTree, 70)).toStrictEqual({
      value: 50,
      right: { value: 100, left: { value: 70, left: { value: 60 } } },
      left: { value: 30, left: { value: 20 }, right: { value: 40 } },
    });

    // expect(insertDepthFirst(bTree, bTree, 22)).toStrictEqual({
    //   value: 50,
    //   left: { value: 30, left: { value: 20, right: { value: 22 } }, right: { value: 40 } },
    //   right: { value: 100, left: { value: 70, left: { value: 60 }, right: { value: 80 } } },
    // });
    // expect(insertDepthFirst(bTree, bTree, 70)).toStrictEqual({
    //   value: 50,
    //   left: { value: 30, left: { value: 20, right: { value: 22 } }, right: { value: 40 } },
    //   right: { value: 100, left: { value: 70, left: { value: 70, left: { value: 60 } }, right: { value: 80 } } },
    // });
  });
});
