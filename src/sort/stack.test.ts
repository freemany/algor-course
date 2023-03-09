import { Stack } from './stack';

describe('Stack', () => {
  it('should stack', () => {
    const s = new Stack();
    s.push(1).push(2).push(3);
    expect(s.length).toBe(3);

    expect(s.pop()).toBe(3);
    expect(s.pop()).toBe(2);
    expect(s.pop()).toBe(1);
    expect(s.length).toBe(0);
    expect(s.pop()).toBeUndefined();

    s.push(4).push(5).push(6);
    expect(s.length).toBe(3);
    expect(s.pop()).toBe(6);
    expect(s.pop()).toBe(5);
    expect(s.pop()).toBe(4);
    expect(s.length).toBe(0);
    expect(s.pop()).toBeUndefined();
  });
});
