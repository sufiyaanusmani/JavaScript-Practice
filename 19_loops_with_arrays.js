let num = [3, 5, 22, 5, 9, 80];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

console.log();

num.forEach((element) => {
    console.log(element);
})

const name = 'sufiyaan';
let arr = Array.from(name);
console.log(arr);

for (let i of num) {
    console.log(i);
}

for (let i in num) {
    console.log(num[i]);
}