import { get } from 'https';

export const sum = (n: number[]): number => (n.length === 1 ? n[0] : n[0] + sum(n.slice(1)));

export const getFibonacci_o = (count: number, result: number[] = []): number[] => {
  if (count === 1) {
    return [0];
  }
  if (count === 2) {
    return [0, 1];
  }
  if (!result.length) {
    result = [0, 1];
  }
  result.push(result[result.length - 2] + result[result.length - 1]);

  return result.length === count ? result : getFibonacci_o(count, result);
};

export const getFibonacci = (count: number, a = 0, b = 1): number[] => {
  if (count === 1) {
    return [a];
  }
  if (count === 2) {
    return [a, b];
  }
  count--;

  return count < 0 ? [] : [a, ...getFibonacci(count, b, a + b)];
};

export const getFibonacciNumber = (index: number, count = 1, a = 0, b = 1): number => {
  if (index === 0) {
    return a;
  }
  if (index === 1) {
    return b;
  }
  count++;

  return index === count ? a + b : getFibonacciNumber(index, count, b, a + b);
};
