// Post-order traversal is to traverse the left subtree first.
// Then traverse the right subtree. Finally, visit the root.

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  const result = [];

  const traverse = function(root) {
    root.left && traverse(root.left);
    root.right && traverse(root.right);
    result.push(root.val);
  };
  traverse(root);
  return result;
};

export default postorderTraversal;
