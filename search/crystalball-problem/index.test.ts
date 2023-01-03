import { crystalBall } from '.';

describe('Crystal ball problem', () => {
  it.each([
    [[false, false, false, true, true, true, true], 3],
    [[false, false, false, false, false, false, true], 6],
    [[false, false, false, false, false, false], -1],
    [[true, true], 0],
  ])('should get the floor', (breaks, expected) => {
    expect(crystalBall(breaks)).toBe(expected);
  });
});
