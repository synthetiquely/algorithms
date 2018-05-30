module.exports = class Graph {
  constructor() {
    this.nodes = [];
  }

  /**
   * Добавить узел к граф
   * Сложность O(1)
   *
   * @param {any} value
   */
  addNode(value) {
    this.nodes.push({
      value,
      lines: []
    });
  }

  /**
   * Добавить узел к граф
   * Сложность O(n)
   *
   * @param {any} value
   * @returns {{value: any, lines: any[]}} node
   */
  find(value) {
    return this.nodes.find(node => node.value === value);
  }

  /**
   * Связать два узла между собой
   * Сложность O(1)
   *
   * @param {any} startValue
   * @param {any} endValue
   */
  addLine(startValue, endValue) {
    const startNode = this.find(startValue);
    const endNode = this.find(endValue);

    if (!startNode || !endNode) {
      throw new Error('Обе вершины должны существовать!');
    }
    startNode.lines.push(endNode);
  }
};
