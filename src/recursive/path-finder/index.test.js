import { allPathFinder, pathFinder, readMaze, showMaze } from './index.js';

QUnit.module('Path finder', () => {
  QUnit.test.each(
    'should find path',
    [
      [
        pathFinder(
          [4, 4],
          [0, 3],
          [2, 1],
          [
            [2, 2],
            [2, 0],
            [0, 0],
          ],
        ),
        [
          [0, 3],
          [0, 2],
          [0, 1],
          [1, 1],
          [2, 1],
        ],
      ],
      [
        pathFinder(
          [4, 4],
          [0, 3],
          [3, 0],
          [
            [2, 2],
            [2, 0],
            [0, 0],
            [1, 3],
          ],
        ),
        [
          [0, 3],
          [0, 2],
          [0, 1],
          [1, 1],
          [2, 1],
          [3, 1],
          [3, 0],
        ],
      ],
      [
        pathFinder(
          [7, 7],
          [0, 0],
          [6, 6],
          [
            [1, 0],
            [1, 1],
            [2, 1],
            [1, 3],
            [5, 2],
            [2, 6],
            [4, 5],
            [4, 6],
          ],
        ),
        [
          [0, 0],
          [0, 1],
          [0, 2],
          [1, 2],
          [2, 2],
          [3, 2],
          [3, 1],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [6, 1],
          [6, 2],
          [6, 3],
          [6, 4],
          [6, 5],
          [6, 6],
        ],
      ],
      [
        pathFinder(
          [5, 5],
          [2, 0],
          [2, 4],
          [
            [2, 1],
            [2, 2],
            [2, 3],
            [3, 3],
          ],
        ),
        [
          [2, 0],
          [3, 0],
          [4, 0],
          [4, 1],
          [4, 2],
          [4, 3],
          [4, 4],
          [3, 4],
          [2, 4],
        ],
        [
          pathFinder(
            [4, 4],
            [0, 0],
            [3, 3],
            [
              [1, 1],
              [2, 1],
              [1, 2],
              [2, 2],
              [2, 3],
            ],
          ),
          [
            [0, 0],
            [1, 0],
            [2, 0],
            [3, 0],
            [3, 1],
            [3, 2],
            [3, 3],
          ],
        ],
      ],
    ],
    (assert, [result, expected]) => {
      assert.deepEqual(result, expected, `test: ${expected.join(', ')}`);
    },
  );

  QUnit.test.each('should show maze', [[1, 1]], (assert, [result, expected]) => {
    let maze = [
      '++++++++++++++++++++++++++',
      '+  S                O    +',
      '+                   O    +',
      '+                        +',
      '+                        +',
      '+                        +',
      '+                   O    +',
      '+                   E    +',
      '++++++++++++++++++++++++++',
    ];
    const { start, end, grid, obstacles } = readMaze(maze);
    const path = pathFinder(grid, start, end, obstacles);
    showMaze(grid, start, end, obstacles, path);

    assert.equal(result, expected);
  });

  QUnit.test.each('should compare', [[1, 1]], (assert, [result, expected]) => {
    const input = {
      start: [0, 0],
      end: [1, 2],
      grid: [5, 3],
      obstacles: [],
    };

    console.log(pathFinder(input.grid, input.start, input.end, input.obstacles));
    console.log(allPathFinder(input.grid, input.start, input.end, input.obstacles)[0]);

    assert.equal(result, expected);
  });
});
