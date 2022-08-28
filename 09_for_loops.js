// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for in loop
let obj = {
    sufiyaan: 100,
    harry: 98,
    bill: 99,
    chill: 40
}

let i;
for (i in obj) {
    console.log("Marks of " + i + " are " + obj[i]);
}

// for of loop
// must be iterable
for (i of "sufiyaan") {
    console.log(i);
}