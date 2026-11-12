import a from "./file1.mjs"
import {b} from "./file3.mjs"
// console.log(a);
// console.log(b);


import {b as value} from "./file3.mjs"
// console.log(value)


import add from "./utils/add.js"

console.log(add(30, 40));