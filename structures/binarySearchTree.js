export default class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  /**
   * Проверить если ли такое значение в дереве
   *
   * @param {any} value
   * @returns {boolean}
   */
  contains(value) {
    let current = this.root;

    while (current) {
      if (value > current.value) {
        current = current.right;
      } else if (value < current.value) {
        current = current.left;
      } else {
        return true;
      }
    }

    return false;
  }

  add(value) {
    const node = {
      value,
      left: null,
      right: null,
    };

    if (this.root === null) {
      this.root = node;
      return;
    }

    const current = this.root;
    while (true) {
      if (value > current.value) {
        if (!current.right) {
          current.right = node;
          break;
        }

        current = current.right;
      } else if (value < current.value) {
        if (!current.left) {
          current.left = node;
          break;
        }

        current = current.left;
      } else {
        break;
      }
    }
  }
}