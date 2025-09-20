'use strict';

// 1
const x = {
    y: {
        z: 42
    }
};

// 2
const v = {
    v: () => {
        return {v: 42};
    }
};

// 3
v.prop = 12;

// 4
function debugObject(obj) {
    console.log("Keys:");
    // for (const o in obj) {
    //     console.log(o);
    // }
    console.log(Object.keys(obj));
    console.log("Values:");
    // for (const o in obj) {
    //     console.log(obj[o]);
    // }
    console.log(Object.values(obj))
    console.log("Key-Value-Pairs:");
    for (const o in obj) {
        console.log(o + ": " + obj[o]);
    }
}

// 5
function equals(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) return false;

    for (const key in keys1)
        if (!(key in keys2)) return false;

    for (const key in keys2)
        if (!(key in keys1)) return false;

    return true;
}

// 6
const person = {
    name: "Maya",
    age: 27,
    address: {
        city: "Berlin",
        zip: "10115"
    }
};

const {name, address: {city}} = person;

console.log(name);
console.log(city);

const personExtended = {
    ...person,
    email: "maya@example.com",
    age: 28
}

// Function Calls

// 1
console.log("User Story 1:");
console.log(x.y.z);

// 2
console.log("\nUser Story 2:");
console.log(v.v().v)

// 3
console.log("\nUser Story 3:");
console.log(v.prop);

// 4
console.log("\nUser Story 4:");
debugObject({a: 1, b: 2, c: 3});

// 5
console.log("\nUser Story 5:");
console.log(equals({a: 1, b: 2, c: 3}, {a: 1, b: 2, c: 3}));
console.log(equals([1, 2, 3], [1, 2, 3]));

// 6
console.log("\nUser Story 6:");
console.log(personExtended);

// 7
console.log("\nUser Story 7:");
const personObject = {
    name: "John",
    age: 42,
    func: function () {
        console.log(this.name);
    },
    arrow: () => console.log(this.name)

}

personObject.func();
personObject.arrow();
// Arrow Functions übernehmen this von außen; normale Funktionen setzen this auf das Objekt, das sie aufruft.