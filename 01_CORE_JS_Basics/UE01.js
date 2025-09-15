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

    map.forEach((v, k) => {if(v === 0) map.delete(k);});

    return map;
}

// 2
function rot13(text) {
    text = String(text);
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let code = text[i].charCodeAt(0);
        
	if (code >= 65 && code <= 90) { // Uppercase A-Z
            code = (code - 65 + 13) % 26 + 65;
        }

	else if (code >= 97 && code <= 122) { // Lowercase a-z
            code = (code - 97 + 13) % 26 + 97;
        }
        result += String.fromCharCode(code);
    }
    return result;
}

// 3
function lexicalArraySort(arr, ascending=true) {
    if (!Array.isArray(arr)) throw new TypeError('First parameter must be an array');

    if(ascending) arr.sort((a, b) => a.localeCompare(b));
    else arr.sort((a, b) => a.localeCompare(b)).reverse();
    return arr;

}

// 4
function filterArr(array) {
    if (!Array.isArray(array)) throw new TypeError('First parameter must be an array');
    // return array.filter((item) => item % 2 === 0);
    let result = [];
    for (const element of array) {
        if (typeof element === 'number' && element % 2 === 0) {
            result.push(element);
        }
    }
    return result;

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
    switch (op) {
        case "+":
            return (param1, param2) => param1 + param2;
        case "-":
            return (param1, param2) => param1 - param2;
        case "*":
            return (param1, param2) => param1 * param2;
        case "/":
            return (param1, param2) => param1 / param2;
        default:
            console.error("op must be '+', '-', '*' or '/'. Your input: \"" + op + "\"b");
            return null;
    }
}

// 7
function extractDates(s) {
    if (typeof s !== 'string') throw new TypeError('First parameter must be a string')
    return s.match(/\d{2}\.\d{2}\.\d{4}/g) ?? `No dates could be found for input "${s}"`;
}

function funcCalls(){
// 1
    console.log("\n1");
    console.log(convert("hello"));
    console.log(convert(681));
    console.log(convert(3697));

// 2
    console.log("\n2");
    console.log(rot13("hällo"));
    console.log(rot13(rot13("hällo")));

// 3
    console.log("\n3");
    console.log(lexicalArraySort(["a", "aa", "o", "ä"], false));
    console.log(lexicalArraySort(["a", "aa", "o", "ä"], true));
    console.log(lexicalArraySort(['a', 'aa', 'o', 'ä']));

// 4
    console.log("\n4");
    console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
    console.log(filterArr([4, 2, 6, 8, 3, 16, 94, 3, 1, 7, 12]));
    console.log(filterArr([1, 2, 3, 4, 'hello', true, [1,2,4,33,"fr?"]]));

// 5
    console.log("\n5");
    console.log(test((item) => Math.pow(item, 2), 5, 25));
    console.log(test((item) => Math.pow(item, 2), 5, 26));
    console.log(test((item) => Math.pow(item, 10), 10, 100));
    console.log(test(rot13, "Hallo", "Unyyb"));
	
// 6
    console.log("\n6");
    console.log(generate(";"));
    const add = generate('*');
    console.log(add(3, 4));
    console.log(generate('-')(100, 31));

// 7
    console.log("\n7");
    // should extract 11.12.2010 and 01.01.2022
    console.log(extractDates("fjeiownfriove;angiorejgiqgj12,33,5443gkeogjreo11.12.2010kofjew9jirejgiorq11.12.12odjfoiejf23.03..2022kfwofeo01.01.2022"));
    console.log(extractDates("fjeiwoajfeiogj"))
}

funcCalls();

