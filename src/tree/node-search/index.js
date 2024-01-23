export const getTree = (tree) => {
  const result = { value: tree.value, children: getNodes(tree.children) };
  return result;
};

const getNodes = (nodes) => {
  const result = [];
  for (const node of nodes) {
    result.push({ value: node.value, children: getNodes(node.children) });
  }

  return result;
};

const walkNode = (node, deep) => {
  if (!(node?.left && node?.right)) {
    return [node.value];
  }

  switch (deep) {
    case 'node':
    default:
      return [node.value, ...walkNode(node.left, deep), ...walkNode(node.right, deep)];
    case 'deep-left':
      return [...walkNode(node.left, deep), node.value, ...walkNode(node.right, deep)];
    case 'node-last':
      return [...walkNode(node.left, deep), ...walkNode(node.right, deep), node.value];
  }
};

export const getBinaryNodePath = (root, deep = 'node') => {
  return walkNode(root, deep);
};

const walkBFNode = (node, needle, deep) => {
  if (node?.value === needle) {
    return true;
  }

  switch (deep) {
    case 'left':
      if (node?.left && walkBFNode(node.left, needle, deep)) {
        return true;
      }
      if (node?.right && walkBFNode(node?.right, needle, deep)) {
        return true;
      }
      break;
    case 'right':
      if (node?.right && walkBFNode(node?.right, needle, deep)) {
        return true;
      }
      if (node?.left && walkBFNode(node.left, needle, deep)) {
        return true;
      }
      break;
    case 'horizon':
    default:
      const left = node?.left && walkBFNode(node?.left, needle, deep);
      const right = node?.right && walkBFNode(node.right, needle, deep);
      if (left || right) {
        return true;
      }
      break;
  }

  return false;
};

export const searchBreadthFirst = (root, needle, deep = 'left') => {
  return walkBFNode(root, needle, deep);
};

const getNextLevel = (nodes) => {
  const result = [];
  for (const node of nodes) {
    if (node.left) {
      result.push(node.left);
    }
    if (node.right) {
      result.push(node.right);
    }
  }

  return result;
};

export const searchBF = (root, needle) => {
  let level = [root];
  while (level.length) {
    const node = level.shift();
    if (node.value === needle) {
      return true;
    }
    if (node.left) {
      level.push(node.left);
    }
    if (node.right) {
      level.push(node.right);
    }
  }

  return false;
};

const walkBFNodeCompare = (nodes, deep) => {
  if (nodes[0] === undefined && nodes[1] === undefined) {
    return true;
  }
  if (nodes[0]?.value !== nodes[1]?.value) {
    return false;
  }

  switch (deep) {
    case 'left':
    default:
      return (
        walkBFNodeCompare([nodes[0]?.left, nodes[1]?.left], deep) &&
        walkBFNodeCompare([nodes[0]?.right, nodes[1]?.right], deep)
      );
  }
};

export const compareBreadthFirst = (roots, deep = 'left') => {
  return walkBFNodeCompare(roots, deep);
};

export const compareBF = (roots) => {
  let level = [roots];
  while (level.length) {
    const [node, node1] = level.shift();
    if (node.value !== node1.value) {
      return false;
    }
    if (Boolean(node.left) !== Boolean(node1.left) || Boolean(node.right) !== Boolean(node1.right)) {
      return false;
    }
    if (node.left && node1.left) {
      level.push([node.left, node1.left]);
    }
    if (node.right && node1.right) {
      level.push([node.right, node1.right]);
    }
  }

  return true;
};
