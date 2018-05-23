/**
 *
 * @param {Array<any>} list
 * @param {any} value
 * @returns {number} position in list if value is found or undefined if there is no such value
 */
const binarySearch = (list, value) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    let guess = list[mid];

    if (guess === value) {
      return mid;
    } else if (guess > value) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return;
};

module.exports = binarySearch;
