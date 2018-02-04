// In-order traversal is to traverse the left subtree first.
// Then visit the root. Finally, traverse the right subtree.

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
const inorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  const result = [];

  const traverse = function(root) {
    root.left && traverse(root.left);
    result.push(root.val);
    root.right && traverse(root.right);
  };

  traverse(root);

  return result;
};

export default inorderTraversal;
