// Реализовать Array.prototype.flat

let example1 = [1, 2, [3, 4]];
let example2 = [1, 2, [3, [4, [5, 6], 7], 8], 9];

let flatten = (array) => array.reduce((acc, val) => acc.concat(val), []);

console.group("Flatten");
console.log("Input:", example1);
console.log("Output:", flatten(example1));

console.log("Input:", example2);
console.log("Output:", flatten(example2));

// или

let flattenDeep = (array) =>
    array.reduce((acc, val) => (Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val)), []);

console.group("FlattenDeep");
console.log("Input:", example1);
console.log("Output:", flattenDeep(example1));

console.log("Input:", example2);
console.log("Output:", flattenDeep(example2));

// С использованием стэка
let flattenWithStack = (array) => {
    const stack = [...array];
    const result = [];

    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            result.push(next);
        }
    }

    return result.reverse();
};
