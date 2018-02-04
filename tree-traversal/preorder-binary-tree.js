// Pre-order traversal is to visit the root first.
// Then traverse the left subtree.
// Finally, traverse the right subtree.

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
const preorderTraversal = function(root) {
  if (!root) {
    return [];
  }

  const result = [];

  const traverse = function(root) {
    result.push(root.val);
    root.left && traverse(root.left);
    root.right && traverse(root.right);
  };

  traverse(root);
  return result;
};

export default preorderTraversal;
