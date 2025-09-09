"use strict";

// 1
function convert(amount) {
    if (!amount instanceof Number){
        console.error("Expected a number");
        return new Map();
    }

    let map = new Map([[100, 0], [50, 0], [20, 0], [10, 0], [5, 0], [2, 0], [1, 0]]);
    for (let m of map) {
        while (amount >= m[0]) {
            amount -= m[0];
            map.set(m[0], map.get(m[0]) + 1);
            if (amount === 0) break;
        }
        if (amount === 0) break;
    }
    removeZeroKeys(map);
    return map;
}

const removeZeroKeys = (map) => {
    map.forEach((value, key) => {
        if (value === 0) {
            map.delete(key);
        }
    });
};

// 2
function rot13(text) {
    text = String(text);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let code = text[i].charCodeAt(0);
        if (code >= 65 && code <= 90) { // Uppercase A-Z
            code = (code - 65 + 13) % 26 + 65;
        } else if (code >= 97 && code <= 122) { // Lowercase a-z
            code = (code - 97 + 13) % 26 + 97;
        }
        result += String.fromCharCode(code);
    }
    return result;
}

// 3 TODO lexical order sort
function sort(arr, ascending=true) {
    if (!Array.isArray(arr)) throw new TypeError('First parameter must be an array');
    else {

    }
}

// 4
function filterArr(array) {
    if (!Array.isArray(array)) throw new TypeError('First parameter must be an array');
    else return array.filter((item) => item % 2 === 0);
}

// 5
function test(fu, arg, exp) {
    if (fu instanceof Function || !(arg instanceof Function) || !(exp instanceof Function)) {
        return fu(arg) === exp;
    }
    throw new Error('First parameter must be a function');
}

// 6
function generate(op) {
    if (op.match(/[+\-*\/]/) && op.length === 1) {
        switch (op) {
            case "+":
                return (param1, param2) => param1 + param2;
            case "-":
                return (param1, param2) => param1 - param2;
            case "*":
                return (param1, param2) => param1 * param2;
            case "/":
                return (param1, param2) => param1 / param2;
        }
    } else {
        console.error("\"op\" muss ein Rechenoperator '+', '-', '*' oder '/' sein.");
        return NaN;
    }
}

// 7
function extractDates(s) {
    if (typeof s !== 'string') {
        throw new TypeError('First parameter must be a string');
    }
    return s.match(/[0-9]{2}\.[0-9]{2}\.[0-9]{4}/g);
}

function funcCalls(){
// 1
    console.log("\n1");
    console.log(convert(681));
    console.log(convert(3697));

// 2
    console.log("\n2");
    console.log(rot13("hällo"));
    console.log(rot13(rot13("hällo")));

// 3
    console.log("\n3");

// 4
    console.log("\n4");
    console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    console.log(filterArr([4, 2, 6, 8, 3, 16, 94, 3, 1, 7, 12]));

// 5
    console.log("\n5");
    console.log(test((item) => Math.pow(item, 2), 5, 25));
    console.log(test((item) => Math.pow(item, 2), 5, 26));
    console.log(test((item) => Math.pow(item, 10), 10, 100));

// 6
    console.log("\n6");
    generate(";");
    const add = generate('*');
    console.log(add(3, 4)); // the value is 12 printed on the console

// 7
    console.log("\n7");
    console.log(extractDates("fjeiownfriove;angiorejgiqgj12,33,5443gkeogjreo11.12.2007kofjew9jirejgiorq11.12.12odjfoiejf23.03..2022kfwofeo01.01.2022"));
}

funcCalls();

