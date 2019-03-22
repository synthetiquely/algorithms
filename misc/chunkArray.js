let chunkArray = (array, len) => {
    if (!array.length || !len) return array;
    let chunks = [];
    let i = 0;

    while (i < array.length) {
        let chunk = array.slice(i, i + len);
        chunks.push(chunk);
        i += chunk.length;
    }

    return chunks;
};

let chunkArray2 = (array, len) => {
    let chunks = [];

    array.forEach(item => {
        let last = chunks[chunks.length - 1];
        if (!last || last.length === len) {
            chunks.push([item]);
        } else {
            last.push(item);
        }
    });

    return chunks;
};

console.log((chunkArray([1,2,3,4,5,6, 7], 3)));
