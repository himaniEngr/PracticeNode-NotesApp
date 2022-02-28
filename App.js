// firstName = require("./utils.js");
// fs = require("fs");
// fs.writeFileSync("notes.txt", "created existing file ");
// fs.appendFileSync("notes.txt", "updated existing file ");
// const name = "Andrew";
// console.log(firstName);

const add = require("./utils.js");
const sum = add(4, -2);
console.log(sum);

const getNotes = require("./notes.js");
console.log(getNotes());
