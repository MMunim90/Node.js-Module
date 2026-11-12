const value = require("./file1.js");

// console.log(value);
// console.log(value.a);
// console.log(value.b);


const {a, b} = require("./file1.js");
// console.log(a)
// console.log(b)


const {a: x, b: y} = require("./file1.js");
console.log(x)
console.log(y)