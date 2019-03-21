let reduce = (callback, array, initialValue) => {
    let accumulator = initialValue === undefined ? undefined : initialValue;

    for (let i = 0; i < array.length; i++) {
        if (accumulator !== undefined) {
            accumulator = callback.call(undefined, accumulator, array[i], i, array);
        } else {
            accumulator = array[i];
        }
    }

    return accumulator;
};

let example1 = [1, 2, [3, 4]];
let example2 = [1, 2, [3, [4, [5, 6], 7], 8], 9];

let flatten = (array) => reduce((acc, val) => acc.concat(val), array, []);

console.group("Flatten");
console.log("Input:", example1);
console.log("Output:", flatten(example1));

console.log("Input:", example2);
console.log("Output:", flatten(example2));
