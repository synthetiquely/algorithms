const mergeSort = require('./index');
const mergeSortTwoArrays = require('./mergeSortTwoArrays');

// Example
let items = [4, 1, 92, 99, 43, 22, 66, 19, 59];
console.log('Input', items);
items = mergeSort(items);
console.log('Output', items);
console.log(
  'Two arrays sorted',
  mergeSortTwoArrays([1, 5, 10], [5, 6, 15, 100]),
);
