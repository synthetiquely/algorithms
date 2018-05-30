const levelOrderTraversal = root => {
  if (!root) return [];

  const result = [];

  const traverse = (root, level) => {
    if (!root) return;
    if (level === 1) result.push(root.value);
    else if (level > 1) {
      traverse(root.left, level - 1);
      traverse(root.right, level - 1);
    }
  };

  const calculateNodeHeight = root => {
    if (!root) return 0;

    let leftHeight = calculateNodeHeight(root.left);
    let rightHeight = calculateNodeHeight(root.right);

    if (leftHeight > rightHeight) return leftHeight + 1;
    else return rightHeight + 1;
  };

  let height = calculateNodeHeight(root);

  for (let i = 1; i <= height + 1; i++) {
    traverse(root, i);
  }

  return result;
};

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

console.log('Output:', levelOrderTraversal(root));
