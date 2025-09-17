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
function debugObeject(obj1, obj2) {

}


// 6


// 7 - see further down


// 1
console.log("User Story 1:");
console.log(x.y.z);

// 2
console.log("User Story 2:");
console.log(v.v().v)

// 3
console.log("User Story 3:");

// 4
console.log("User Story 4:");
debugObject({a: 1, b: 2, c: 3});
console.log(Object.values(x) instanceof Array);

// 5
console.log("User Story 5:");


// 6
const person = {
    name: "Maya",
    age: 27,
    address: {
        city: "Berlin",
        zip: "10115"
    }
};

// 7
const personObject = {
    name: "John",
    age: 42,
    func: function () {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
}

personObject.func();
personObject.arrow();
