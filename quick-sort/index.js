/**
 * Quick sorting. O(n log(n))
 * @param {Array<any>} arr
 * @returns {Array<any>} sorted array
 */

const quicksort = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let pivot = arr[middle];
  let less = arr.filter(value => value < pivot);
  let greater = arr.filter(value => value > pivot);

  return quicksort(less)
    .concat(pivot)
    .concat(quicksort(greater));
};

module.exports = quicksort;
