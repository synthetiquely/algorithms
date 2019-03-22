let reverseString = (str) => {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[str.length - i - 1];
    }

    return result;
};

console.log(reverseString("hello"));

let capitalizeLetters = (str) => {
    // return str
    //     .toLowerCase()
    //     .split(" ")
    //     .map((word) => word.substring(0, 1).toUpperCase() + word.substring(1))
    //     .join(" ");

    return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
};

console.log(capitalizeLetters("i love javascript"));

let maxCharacter = (str) => {
    let hash = {};

    for (let i = 0; i < str.length; i++) {
        if (hash[str[i]]) {
            hash[str[i]] = hash[str[i]] + 1;
        } else {
            hash[str[i]] = 1;
        }
    }

    let maxNum = 0;
    let maxChar = "";
    for (let char in hash) {
        if (hash[char] > maxNum) {
            maxNum = hash[char];
            maxChar = char;
        }
    }

    return { char: maxChar, num: maxNum };
};

console.log(maxCharacter("javascript"));

let fizzbuzz = () => {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
};

// fizzbuzz();

let longestWord = (input) => {
    let words = input.toLowerCase().match(/[a-z0-9]+/g);

    let sorted = words.sort((a, b) => {
        return b.length - a.length;
    });

    let longest = sorted.filter((word) => word.length >= sorted[0].length);

    if (longest.length === 1) {
        return longest[0];
    }

    return longest;
};

console.log(longestWord("Hello there, my name is Tom"));

let isAnagram = (str1, str2) => {
    let formatStr = (str) =>
        str
            .replace(/[^\w]/g, "")
            .toLowerCase()
            .split("")
            .sort()
            .join();

    return formatStr(str1) === formatStr(str2);
};

console.log(isAnagram("Dormitory", "dirty room##"));

let changeLetters = (str) => {
    let newStr = str.toLowerCase().replace(/[a-z]/g, (char) => {
        if (char === "z" || char === "Z") {
            return "a";
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, (char) => char.toUpperCase());

    return newStr;
};

console.log(changeLetters("hello there"));

let seekAndDestroy = (arr, ...args) => {
    return arr.filter((val) => !args.includes(val));
};

console.log(seekAndDestroy([2, 3, 4, 6, 6, "hello"], 2, 6));

let findMissingLetters = (str) => {
    let compare = str.charCodeAt(0);
    let missing;

    str.split("").forEach((char, index) => {
        if (str.charCodeAt(index) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
};

console.log(findMissingLetters("abcdefgi"));
