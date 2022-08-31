// Question 3

let str = "THIS IS A STRING";

str = str.toLowerCase();

console.log(str);

// Question 4

str = "The amount is Rs 1000";
const amount = Number.parseInt(str.slice("The amount is Rs ".length));
console.log(amount);

// Questions 5

str[3] = "y"
console.log(str); // not changes as string is immutable