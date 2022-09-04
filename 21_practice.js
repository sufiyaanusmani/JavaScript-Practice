// Question 1
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(i);
}
console.log(arr);

// Question 3
let num = [10, 40, 23, 50, 33, 200, 43, 90, 89, 50];
let numFilter = num.filter((value) => {
    return (value % 10 == 0);
})
console.log(numFilter);

// Question 4
let a = [2, 3, 5, 6, 3, 1, 9];
let b = a.map((value) => {
    return value * value;
})
console.log(b);

// Question 5
let c = [1, 2, 3, 4, 5];
let d = c.reduce((x, y) => {
    return x * y;
})
console.log(d);