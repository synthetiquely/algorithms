class List {
  constructor() {
    this.memory = [];
    this.length = 0;
  }

  /**
   * Получить доступ к значению по адрессу в памяти
   * Сложность O(1)
   * @param {number} address
   * @returns {any} value
   */
  get(address) {
    return this.memory[address];
  }

  /**
   * Добавить значение в конец списка
   * Сложность O(1)
   *
   * @param {any} value
   */
  push(value) {
    this.memory[this.length] = value;
    this.length += 1;
  }

  /**
   * Удалить значение из конца
   * Сложность O(1)
   *
   * @returns {any} value
   */
  pop() {
    if (this.length === 0) {
      return;
    }

    const lastAddress = this.length - 1;
    const value = this.memory[lastAddress];
    delete this.memory[lastAddress];
    this.length -= 1;

    return value;
  }

  /**
   * Добавить значение в начало списка
   * Сложность O(n)
   *
   * @param {any} value
   */
  unshift(value) {
    // Cохраняем значение, которое хотим добавить в начало.
    let previous = value;

    // Проходимся по каждому элементу...
    for (let address = 0; address < this.length; address++) {
      // заменяя текущее значение «current» на предыдущее значение «previous»,
      // и сохраняя значение «current» для следующей итерации.
      let current = this.memory[address];
      this.memory[address] = previous;
      previous = current;
    }

    // Добавляем последний элемент на новую позицию в конце списка.
    this.memory[this.length] = previous;
    this.length += 1;
  }

  /**
   * Удалить значение из начала списка
   * Сложность O(n)
   *
   * @returns {any}
   */
  shift() {
    if (this.length === 0) {
      return;
    }

    let value = this.memory[0];
    // Проходимся по каждому элементу, кроме последнего
    for (let address = 0; address < this.length - 1; address++) {
      // и заменяем его на следующий элемент списка.
      this.memory[address] = this.memory[address + 1];
    }
    // Удаляем последний элемент, поскольку значение теперь в предыдущем адресе.
    delete this.memory[this.length - 1];
    this.length -= 1;

    return value;
  }
}
