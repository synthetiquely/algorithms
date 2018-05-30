/**
 * Task: Maximum Path Sum in a Binary Tree
 * Description: Given a binary tree, find the maximum path sum.
 * The path may start and end at any node in the tree.
 */

function findMaxSum(root) {
  let result = 0;
  function findMaxUtil(node) {
    if (!node) return 0;

    let left = findMaxUtil(node.left);
    let right = findMaxUtil(node.right);

    let max = Math.max(Math.max(left, right) + node.value, node.value);

    let maxTop = Math.max(max, left + right + node.value);

    result = Math.max(result, maxTop);

    return max;
  }

  findMaxUtil(root);

  return result;
}

let root = {
  value: 10,
  left: {
    value: 2,
    left: {
      value: 20,
      left: null,
      right: null
    },
    right: {
      value: 1,
      left: null,
      right: null
    }
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: -25,
      left: {
        value: 3,
        left: null,
        right: null
      },
      right: {
        value: 4,
        left: null,
        right: null
      }
    }
  }
};

console.log('Output:', findMaxSum(root));
