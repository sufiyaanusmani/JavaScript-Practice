// Question 1

const marks = {
    sufiyaan: 100,
    harry: 98,
    larry: 96
};

let sum = 0;
let i;
for (i in marks) {
    sum += marks[i];
}
console.log("Sum: " + sum);