// Primitives
// nn bb ss u

let a = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Sufiyaan";
let f = Symbol("I am a nice symbol");
let g = undefined;

console.log(a, b, c, d, e, f, g);
console.log(typeof (d));

// Objects
// key value pairs
const item = {
    "Sufiyaan": true,
    "Harry": false,
    "Pizza": 33,
    "II": undefined
};

console.log(item);
console.log(item["Harry"]);
console.log(item["apple"]);
console.log(item["II"]);

// Write a JS program to store name, phone number and marks of a student using objects

const student = {
    name: "Sufiyaan Usmani",
    phone: 123456789,
    marks: 99
};

console.log(student);