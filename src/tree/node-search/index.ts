type Node = {
  value: number;
  children: Node[];
};

export const getTree = (tree: Node) => {
  const result = { value: tree.value, children: getNodes(tree.children) };
  return result;
};

const getNodes = (nodes: Node[]): Node[] => {
  const result: Node[] = [];
  for (const node of nodes) {
    result.push({ value: node.value, children: getNodes(node.children) });
  }

  return result;
};

type BNode = {
  value: number;
  left?: BNode;
  right?: BNode;
};

type Path = number[];

type Deep = 'node' | 'deep-left' | 'node-last';

const walkNode = (node: BNode, deep: Deep): Path => {
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

export const getBinaryNodePath = (root: BNode, deep: Deep = 'node'): Path => {
  return walkNode(root, deep);
};

type BFDeep = 'left' | 'right' | 'horizon';

const walkBFNode = (node: BNode | undefined, needle: number, deep: BFDeep): boolean => {
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

export const searchBreadthFirst = (root: BNode, needle: number, deep: BFDeep = 'left'): boolean => {
  return walkBFNode(root, needle, deep);
};

const getNextLevel = (nodes: BNode[]): BNode[] => {
  const result: BNode[] = [];
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

export const searchBF = (root: BNode, needle: number): boolean => {
  let level = [root];
  while (level.length) {
    const node = level.shift() as BNode;
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

const walkBFNodeCompare = (nodes: (BNode | undefined)[], deep: BFDeep): boolean => {
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

export const compareBreadthFirst = (roots: BNode[], deep: BFDeep = 'left'): boolean => {
  return walkBFNodeCompare(roots, deep);
};

export const compareBF = (roots: BNode[]): boolean => {
  let level = [roots];
  while (level.length) {
    const [node, node1] = level.shift() as BNode[];
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
