const multiByAdd = (a, b) => {
  let result = 0;
  if (b < 0) {
    return;
  }
  for (let i = 0; i < b; i++) {
    result += a;
  }
  return result;
};

module.exports = multiByAdd;
