import { ArrayList } from './array-list';

describe('Array List', () => {
  it('should have array list', () => {
    const list = new ArrayList();
    list.push(1);
    list.push(2);
    expect(list.length).toBe(2);

    list.add(3).add(4);
    expect(list.length).toBe(4);

    expect(list.removeLast()).toBe(4);
    expect(list.length).toBe(3);

    expect(list.remove(1)).toBe(2);

    list.add(1).add(4).removeDuplicated();
    expect([...list]).toStrictEqual([1, 3, 4]);
  });
});
