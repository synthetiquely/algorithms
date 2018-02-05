class HashTable {
  constructor() {
    this.memory = [];
  }

  /**
   * Получить значение по ключу
   * Сложность: O(1)
   * @param {string} key
   * @returns {any} value
   */
  get(key) {
    const address = this.hashKey(key);
    return this.memory[address];
  }

  /**
   * Добавить значение по ключу
   * Сложность: O(1)
   * @param {string} key
   * @param {any} value
   */
  set(key, value) {
    const address = this.hashKey(key);
    this.memory[address] = value;
  }

  /**
   * Удалить значение по ключу
   * Сложность: O(1)
   * @param {string} key
   */
  remove(key) {
    const address = this.hashKey(key);
    if (this.memory[address]) {
      delete this.memory[address];
    }
  }

  /**
   * Получить хэш по ключу
   * @param {string} key
   * @returns {number} hash
   */
  hashKey(key) {
    let hash = 0;
    for (let index = 0; index < key.length; index++) {
      const code = key.charCodeAt(index);
      hash = ((hash << 5) - hash + code) | 0;
    }
    return hash;
  }
}
