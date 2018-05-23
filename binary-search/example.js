const binarySearch = require('./index');

// Example
let items = [1, 2, 3, 4, 5, 6, 7];
console.log('Input', items);
index = binarySearch(items, 5);
console.log('Output', items[index], 'Position', index);
