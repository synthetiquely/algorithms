export default class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /**
   * Получить доступ к значению по номеру позиции в связанный список
   * @param {number} position
   * @returns {any} value
   */
  get(position) {
    if (position >= this.length) {
      throw new Error('Позиция выходит за пределы списка');
    }

    const current = this.head;
    for (let index = 0; index < position; index++) {
      current = current.next;
    }

    return current;
  }

  /**
   * Добавить значение по номеру в связанный список
   *
   * @param {any} value
   * @param {number} position
   */
  add(value, position) {
    const node = {
      value,
      next: null,
    };

    if (position === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      const prev = this.get(position - 1);
      const current = prev.next;
      node.next = current;
      prev.next = node;
    }

    this.length++;
  }

  /**
   * Удалить значение по номеру из связанного списка
   *
   * @param {number} position
   */
  remove(position) {
    if (position === 0) {
      this.head = this.head.next;
    } else {
      const prev = this.get(position - 1);
      prev.next = prev.next.next;
    }
    this.length--;
  }
}
