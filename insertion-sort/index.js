// Complexity: O(n^2)
const insertionSort = items => {
  for (var i = 0; i < items.length; i++) {
    // store the current item value so it can be placed right
    let value = items[i];
    // loop through the items in the sorted array (the items from the current to the beginning)
    // copy each item to the next one
    for (var j = i - 1; j > -1 && items[j] > value; j--) {
      items[j + 1] = items[j];
    }
    // the last item we've reached should now hold the value of the currently sorted item
    items[j + 1] = value;
  }
  return items;
};

module.exports = insertionSort;
