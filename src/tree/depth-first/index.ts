type BNode = {
  value: number;
  left?: BNode;
  right?: BNode;
};

export const searchDepthFirst = (node: BNode, needle: number): boolean => {
  if (node.value === needle) {
    return true;
  }
  if (node.value < needle && node.right) {
    return searchDepthFirst(node.right, needle);
  }
  if (node.value > needle && node.left) {
    return searchDepthFirst(node.left, needle);
  }

  return false;
};

export const buildBinaryTree = (arr: number[], index = 0): BNode => {
  const pivot = arr[index];
  const array = [...arr];
  array.splice(index, 1);

  const node: BNode = {
    value: pivot,
  };

  const left: number[] = [];
  const right: number[] = [];
  array.forEach((a) => {
    if (a <= pivot) {
      left.push(a);
    }
    if (a > pivot) {
      right.push(a);
    }
  });
  if (left.length) {
    node.left = buildBinaryTree(left);
  }
  if (right.length) {
    node.right = buildBinaryTree(right);
  }

  return node;
};

// export const insertDepthFirst = (root: BNode, node: BNode, value: number): BNode => {
//   if (node.value < value) {
//     if (node.right) {
//       return insertDepthFirst(root, node.right, value);
//     } else {
//       node.right = { value };
//       return root;
//     }
//   }
//   if (node.value > value) {
//     if (node.left) {
//       return insertDepthFirst(root, node.left, value);
//     } else {
//       node.left = { value };
//       return root;
//     }
//   }
//   node.left = { value, left: node.left };
//   return root;
// };

export const insertDepthFirst = (node: BNode, value: number): BNode => {
  if (node.value < value) {
    return {
      value: node.value,
      right: node.right ? { ...insertDepthFirst(node.right, value) } : { value },
      ...(node.left && { left: { ...node.left } }),
    };
  }
  if (node.value > value) {
    return {
      value: node.value,
      left: node.left ? { ...insertDepthFirst(node.left, value) } : { value },
      ...(node.right && { right: { ...node.right } }),
    };
  }
  return {
    value,
    ...(node.left && { left: { ...node.left } }),
  };
};
