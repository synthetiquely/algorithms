module.exports = class BinarySearchTree {
    /**
     *   Complexity: O(n)
     * @param {{ value: number, left: Node, right: Node }} root
     * @param {number} lowerBoundary
     * @param {number} greaterBoundary
     * @returns {boolean}
     */
    static validateBinarySearchTree(root, lowerBoundary, greaterBoundary) {
        if (!root) {
            return true;
        }

        if (
            root.value > lowerBoundary &&
            root.value < greaterBoundary &&
            this.validateBinarySearchTree(root.left, lowerBoundary, root.value) &&
            this.validateBinarySearchTree(root.right, root.value, greaterBoundary)
        ) {
            return true;
        } else {
            return false;
        }
    }

    static isSymetric(root) {
        function reverse(node) {
            if (!node) {
                return;
            }

            let temp = node.left;
            node.left = reverse(node.right);
            node.right = reverse(temp);

            return node;
        }

        function isEqual(left, right) {
            if (!left && !right) {
                return true;
            }

            if (!left || !right) {
                return false;
            }

            return isEqual(left.left, right.left) && isEqual(left.right, right.right);
        }

        return isEqual(root, reverse(root.left), root.right);
    }

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

    /**
     * Добавить значение в дерево
     * @param {any} value
     */
    add(value) {
        const node = {
            value,
            left: null,
            right: null
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
};
