export const allPathFinder = (grid: number[], start: number[], end: number[], obstacles: number[][]): number[][][] => {
  const steps: number[][] = [];
  const trace = [start];
  const results: number[][][] = [];

  const walk = (current: number[], path: number[][]) => {
    const next: number[][] = [];
    next.push([current[0], current[1] - 1]); // up
    next.push([current[0] + 1, current[1]]); // right
    next.push([current[0], current[1] + 1]); // down
    next.push([current[0] - 1, current[1]]); // left

    for (const pos of next) {
      if (pos[0] === grid[0] || pos[0] < 0 || pos[1] === grid[1] || pos[1] < 0) {
        // out boundary
        continue;
      }
      if (path.some((s) => s[0] === pos[0] && s[1] === pos[1])) {
        // been there
        continue;
      }
      if (obstacles.some((o) => o[0] === pos[0] && o[1] === pos[1])) {
        // hit obstacles
        continue;
      }

      if (pos[0] === end[0] && pos[1] === end[1]) {
        const result: number[][] = [...path, end];
        results.push(result);

        return result;
      }

      walk(pos, [...path, pos]);
    }
  };

  walk(start, trace);

  return results.sort((a, b) => a.length - b.length);
};

const defaultMaze = [
  '++++++++++++++++++++++++++',
  '+  S                     +',
  '+                        +',
  '+                        +',
  '+                        +',
  '+                        +',
  '+                        +',
  '+                   E    +',
  '++++++++++++++++++++++++++',
];

export const readMaze = (mazee: string[] = defaultMaze) => {
  const maze = [...mazee];
  maze.shift();
  maze.pop();
  const grid = [maze[0].length - 2, maze.length];
  const obstacles: number[][] = [];
  let start, end;

  for (let y = 0; y < maze.length; y++) {
    const row = [...maze[y]];
    row.shift();
    row.pop();
    for (let x = 0; x < row.length; x++) {
      if (row[x] === 'S') {
        start = [x, y];
        continue;
      }
      if (row[x] === 'E') {
        end = [x, y];
        continue;
      }
      if (row[x] === 'O') {
        obstacles.push([x, y]);
      }
    }
  }

  return { start, end, obstacles, grid };
};

export const showMaze = (grid, start, end, obstacles, path) => {
  path.shift();
  path.pop();
  process.stdout.write('+'.repeat(grid[0] + 2) + '\n');

  for (let y = 0; y < grid[1]; y++) {
    process.stdout.write('+');
    for (let x = 0; x < grid[0]; x++) {
      if (start[0] === x && start[1] === y) {
        process.stdout.write('S');
        continue;
      }
      if (end[0] === x && end[1] === y) {
        process.stdout.write('E');
        continue;
      }
      if (obstacles.some((o) => o[0] === x && o[1] === y)) {
        process.stdout.write('O');
        continue;
      }
      if (path.some((o) => o[0] === x && o[1] === y)) {
        process.stdout.write('X');
        continue;
      }
      process.stdout.write(' ');
    }
    process.stdout.write('+\n');
  }
  process.stdout.write('+'.repeat(grid[0] + 2) + '\n');
};

export const pathFinder = (
  grid: number[],
  start: number[],
  end: number[],
  obstacles: number[][],
): number[][] | undefined => {
  const dir = [
    [0, -1],
    [1, 0],
    [0, 1],
    [-1, 0],
  ];
  const path = [start];

  const walk = (current: number[], path: number[][]): number[][] | undefined => {
    for (const d of dir) {
      const pos = [current[0] + d[0], current[1] + d[1]];

      if (pos[0] === grid[0] || pos[0] < 0 || pos[1] === grid[1] || pos[1] < 0) {
        // out boundary
        continue;
      }
      if (path.some((s) => s[0] === pos[0] && s[1] === pos[1])) {
        // been there
        continue;
      }
      if (obstacles.some((o) => o[0] === pos[0] && o[1] === pos[1])) {
        // hit obstacles
        continue;
      }

      if (pos[0] === end[0] && pos[1] === end[1]) {
        path.push(pos);

        return path;
      }

      const result = walk(pos, [...path, pos]);
      if (result !== undefined) {
        return result;
      }
    }

    return;
  }; // end walk

  return walk(start, path);
};
