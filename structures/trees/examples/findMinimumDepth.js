/**
 * Task: Find Minimum Depth of a Binary Tree
 * Description: Given a binary tree, find its minimum depth.
 * The minimum depth is the number of nodes along the shortest path from
 * root node down to the nearest leaf node.
 */

function minDepth(node) {
  if (!node) return 0;

  if (!node.left && !node.right) return 1;

  if (!node.left) return minDepth(node.right) + 1;

  if (!node.right) return minDepth(node.left) + 1;

  return Math.min(minDepth(node.left), minDepth(node.right)) + 1;
}

let root = {
  value: 1,
  right: {
    value: 3,
    right: null,
    left: null
  },
  left: {
    value: 2,
    right: {
      value: 5,
      right: null,
      left: null
    },
    left: {
      value: 4,
      right: null,
      left: null
    }
  }
};

console.log('Output:', minDepth(root));
