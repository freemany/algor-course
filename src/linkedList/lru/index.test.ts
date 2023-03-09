import LruLinkedList from '.';

describe('LRU', () => {
  it('should add, delete and update', () => {
    const l = new LruLinkedList(5);
    expect(l.get('1', 1)).toBe(1);
    expect(l.get('2', 2)).toBe(2);
    expect(l.get('3', 3)).toBe(3);
    expect(l.get('4', 4)).toBe(4);
    expect(l.toArray()).toStrictEqual([
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
      { key: '1', value: 1 },
    ]);

    expect(l.get('1')).toBe(1);
    expect(l.toArray()).toStrictEqual([
      { key: '1', value: 1 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
    ]);

    expect(l.get('5', 5)).toBe(5);
    expect(l.toArray()).toStrictEqual([
      { key: '5', value: 5 },
      { key: '1', value: 1 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
      { key: '2', value: 2 },
    ]);

    expect(l.get('6', 6)).toBe(6);
    expect(l.toArray()).toStrictEqual([
      { key: '6', value: 6 },
      { key: '5', value: 5 },
      { key: '1', value: 1 },
      { key: '4', value: 4 },
      { key: '3', value: 3 },
    ]);

    expect(l.get('4')).toBe(4);
    expect(l.toArray()).toStrictEqual([
      { key: '4', value: 4 },
      { key: '6', value: 6 },
      { key: '5', value: 5 },
      { key: '1', value: 1 },
      { key: '3', value: 3 },
    ]);

    expect(l.delete('999')).toBe(false);
    expect(l.delete('6')).toBe(true);
    expect(l.toArray()).toStrictEqual([
      { key: '4', value: 4 },
      { key: '5', value: 5 },
      { key: '1', value: 1 },
      { key: '3', value: 3 },
    ]);

    expect(l.update('1', 11)).toBe(true);
    expect(l.toArray()).toStrictEqual([
      { key: '4', value: 4 },
      { key: '5', value: 5 },
      { key: '1', value: 11 },
      { key: '3', value: 3 },
    ]);

    expect(l.update('11111', 11)).toBe(false);
  });
});
