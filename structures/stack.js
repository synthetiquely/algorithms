export default class Stack {
  constructor() {
    this.list = [];
    this.length = 0;
  }

  /**
   * Добавить значение в конец стэка
   * Сложность O(1)
   *
   * @param {any} value
   */

  push(value) {
    this.length++;
    this.list.push(value);
  }

  /**
   * Удалить значение из конца стэка
   * Сложность O(1)
   *
   * @returns {any} value
   */
  pop() {
    if (this.length === 0) {
      return;
    }

    this.length--;
    return this.list.pop();
  }

  /**
   * Посмотреть текущий элемент на верхушке стэка
   * Сложность O(1)
   *
   * @returns {any} value
   */
  peek() {
    return this.list[this.length - 1];
  }
}
