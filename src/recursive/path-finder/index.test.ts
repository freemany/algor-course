import { allPathFinder, pathFinder, readMaze, showMaze } from '.';

describe('Path finder', () => {
  it('should find path', () => {
    let result = pathFinder(
      [4, 4],
      [0, 3],
      [2, 1],
      [
        [2, 2],
        [2, 0],
        [0, 0],
      ],
    );
    expect(result).toStrictEqual([
      [0, 3],
      [0, 2],
      [0, 1],
      [1, 1],
      [2, 1],
    ]);

    result = pathFinder(
      [4, 4],
      [0, 3],
      [3, 0],
      [
        [2, 2],
        [2, 0],
        [0, 0],
        [1, 3],
      ],
    );
    expect(result).toStrictEqual([
      [0, 3],
      [0, 2],
      [0, 1],
      [1, 1],
      [2, 1],
      [3, 1],
      [3, 0],
    ]);

    result = pathFinder(
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
    );
    expect(result).toStrictEqual([
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
    ]);

    result = pathFinder(
      [5, 5],
      [2, 0],
      [2, 4],
      [
        [2, 1],
        [2, 2],
        [2, 3],
        [3, 3],
      ],
    );
    expect(result).toStrictEqual([
      [2, 0],
      [3, 0],
      [4, 0],
      [4, 1],
      [4, 2],
      [4, 3],
      [4, 4],
      [3, 4],
      [2, 4],
    ]);

    result = pathFinder(
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
    );
    expect(result).toStrictEqual([
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [3, 1],
      [3, 2],
      [3, 3],
    ]);
  });

  it('should show maze', () => {
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
  });

  it('should compare', () => {
    const input = {
      start: [0, 0],
      end: [1, 2],
      grid: [5, 3],
      obstacles: [],
    };

    console.log(pathFinder(input.grid, input.start, input.end, input.obstacles));
    console.log(allPathFinder(input.grid, input.start, input.end, input.obstacles)[0]);
  });
});
