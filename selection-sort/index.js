/**
 * Selection sorting. O(n^2)
 * @param {any} arr
 * @returns sorted array
 */
const selectionSort = (arr) => {
  const result = [];
  let smallest;
  for (let i = 0; i < arr.length; i++) {
    smallest = findSmallest(arr);
    result.push(arr[smallest]);
    delete arr[smallest];
  }
  return result;
};

const findSmallest = (arr) => {
  let smallest = arr[0];
  let smallestIndex = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
};

module.exports = selectionSort;
