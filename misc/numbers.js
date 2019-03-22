let reverseInt = (int) => {
    return (
        parseInt(
            int
                .toString()
                .split("")
                .reverse()
                .join(""),
            10
        ) * Math.sign(int)
    );
};

console.log(reverseInt(-54321));

function findAll() {
    // Array.from
    let args = Array.prototype.slice.call(arguments);
    return args.reduce((acc, value) => acc + value, 0);
}

console.log(findAll(1,2,3,4,5,6,7,8,9));

const summAllPrimes = value => {
    let total = 0;

    let checkForPrime = (i) => {
        for (let j = 2; j < i; j++) {
            if (i % j  === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= value; i++) {
        if (checkForPrime(i)) {
            total += i;
        }
    }

    return total;
}

console.log(summAllPrimes(10));
