// Q1
let str = "JS";
let num = 7;
console.log(str + num);

// Q2
console.log(typeof (str + num));

// Q3
const person = {        // this is only a reference, you can still modify things inside it
    name: "Sufiyaan",
    section: 3,
    isMale: true
};

// Q4
// person = "Harry";
console.log(person);

person["friend"] = "Ahsan";
person["section"] = 2;
console.log(person);

// Q5
const dict = {
    "web": "HTML CSS JS",
    "ai": "Python",
    "desktop": "C",
    "gui": "C#"
};

console.log(dict);
console.log(dict.desktop);
console.log(dict["ai"]);