let arr = [3, 5, 5, 6, 8, null, true, "str"];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[2] = 90;
console.log(arr);

console.log("Length:", arr.length);
console.log(typeof arr);

let item;
console.log("Values:");
for (item in arr) {
    console.log(arr[item]);
}