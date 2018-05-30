export default class Tree {
  constructor() {
    this.root = null;
  }

  /**
   * Рекурсивный обход дерева
   *
   * @param {function} callback
   */
  traverse(callback) {
    function walk(node) {
      callback(node);
      node.children.forEach(walk);
    }

    walk(this.root);
  }

  /**
   * Добавить узел к существующему узлу дерева
   *
   * @param {any} value
   * @param {any} parentValue
   */
  add(value, parentValue) {
    const newNode = {
      value,
      children: [],
    };

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this.traverse(function(node) {
      if (node.value === parentValue) {
        node.children.push(newNode);
      }
    });
  }
}
