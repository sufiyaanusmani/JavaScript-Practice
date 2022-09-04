let arr = [45, 34, 23, 54, 99, 67, 44];

let arr1 = arr.map((value) => {
    return value * 10;
})

console.log(arr1);

let arr2 = arr.filter((value) => {
    return value < 40;
})

console.log(arr2);

let arr3 = arr.reduce((a, b) => {
    return a + b;
})

console.log(arr3);