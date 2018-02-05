export default class Queue {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  /**
   * Добавить значение в конец очереди
   * Сложность O(1)
   *
   * @param {any} value
   */
  enqueue(value) {
    this.length++;
    this.list.push(value);
  }

  /**
   * Удалить значение из начала очереди
   * Сложность O(n)
   *
   * @returns {any} value
   */
  dequeue() {
    if (this.length === 0) {
      return;
    }

    this.length--;
    return this.list.shift();
  }

  /**
   * Посмотреть текущий элемент в начале очереди
   * Сложность O(1)
   *
   * @returns {any} value
   */
  peek() {
    return this.list[0];
  }
}
