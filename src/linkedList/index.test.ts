import { DoubleLinkedList, Node } from '.';

const readDoubleLinkedList = (list: DoubleLinkedList) => {
  const result: number[] = [];
  let node = list.head as Node | null;
  if (!node) {
    return result;
  }
  while (node) {
    result.push(node.data);
    node = node.next;
  }

  return result;
};

describe('Linked list', () => {
  it('should double linked list', () => {
    let list = new DoubleLinkedList();
    expect(readDoubleLinkedList(list)).toStrictEqual([]);
    expect(list.tail).toBeNull();

    list = new DoubleLinkedList();
    list.append(0).append(1).append(2).append(3);
    expect(readDoubleLinkedList(list)).toStrictEqual([0, 1, 2, 3]);
    expect((list.tail as Node).next).toBeNull();

    list.prepend(100);
    expect(readDoubleLinkedList(list)).toStrictEqual([100, 0, 1, 2, 3]);
    expect((list.tail as Node).next).toBeNull();

    list.insertAt(1, 99);
    expect(readDoubleLinkedList(list)).toStrictEqual([100, 99, 0, 1, 2, 3]);
    expect((list.tail as Node).next).toBeNull();

    expect(list.getFromHead(1)).toBe(99);
    expect(list.getFromTail(2)).toBe(1);

    list.removeAt(4);
    expect(readDoubleLinkedList(list)).toStrictEqual([100, 99, 0, 1, 3]);
    expect(list.getLength()).toBe(5);
    expect((list.tail as Node).next).toBeNull();

    list.clear();
    expect(list.head).toBeNull();
  });
});
