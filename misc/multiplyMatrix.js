function multiply(A, B) {
    let rowsA = A.length;
    let colsA = A[0].length;
    let rowsB = B.length;
    let colsB = B[0].length;
    let C = [];

    if (colsA != rowsB) return false;

    for (let i = 0; i < rowsA; i++) {
        C[i] = [];
    }

    for (let k = 0; k < colsB; k++) {
        for (let i = 0; i < rowsA; i++) {
            let temp = 0;
            for (let j = 0; j < rowsB; j++) {
                temp += A[i][j] * B[j][k];
            }
            C[i][k] = temp;
        }
    }

    return C;
}

console.log(multiply([[1, 2, 11], [4, -4, 1], [3, 11, 2]], [[5, -11], [1, 4], [5, 8]]));
