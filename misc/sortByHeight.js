let sortByHeight = (array) => {
    let indexes = [];
    let values = [];

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
        if (array[i] === -1) {
            indexes.push(i);
        } else {
            values.push(array[i]);
        }
    }

    const sorted = values.sort((a, b) => a - b);

    indexes.forEach((val, i) => sorted.splice(indexes[i], 0, -1));

    return sorted;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
