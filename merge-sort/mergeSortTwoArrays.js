const mergeSortTwoArrays = (a, b) => {
  let sorted = [];
  let indexA = 0;
  let indexB = 0;

  while (indexA < a.length && indexB < b.length) {
    if (a[indexA] < b[indexB]) {
      sorted.push(a[indexA]);
      indexA++;
    } else {
      sorted.push(b[indexB]);
      indexB++;
    }
  }

  if (indexB < b.length) {
    sorted = sorted.concat(b.slice(indexB));
  } else {
    sorted = sorted.concat(a.slice(indexA));
  }

  return sorted;
};

module.exports = mergeSortTwoArrays;
