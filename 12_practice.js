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

// Question 3
const num = 7;
let userInput;
while (true) {
    console.log("Enter a number: ");
    userInput = Number.parseInt(prompt());
    if (num == userInput) {
        break;
    } else {
        console.log("Invalid Number");
    }
}

// Question 4
const mean = (a, b, c) => {
    return ((a + b + c) / 3);
}

console.log(mean(5, 4, 8));