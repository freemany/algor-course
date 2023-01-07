import { getFibonacci, getFibonacciNumber, sum } from './sum';

describe('Recursive', () => {
  it('should resursively sum', () => {
    expect(sum([1])).toBe(1);
    expect(sum([1, 2, 3, 4, 5])).toBe(15);
  });

  it('should have Ficonacci series', () => {
    expect(getFibonacci(1)).toStrictEqual([0]);
    expect(getFibonacci(2)).toStrictEqual([0, 1]);
    expect(getFibonacci(4)).toStrictEqual([0, 1, 1, 2]);
    expect(getFibonacci(15)).toStrictEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
  });

  it('should have Ficonacci number', () => {
    expect(getFibonacciNumber(0)).toBe(0);
    expect(getFibonacciNumber(1)).toBe(1);
    expect(getFibonacciNumber(3)).toBe(2);
    expect(getFibonacciNumber(14)).toStrictEqual(377);
  });
});
