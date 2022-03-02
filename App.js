// import chalk from "chalk";
// const chalk = require("chalk");
// console.log(chalk.green("Success"));

const chalk = require("chalk");
console.log(chalk.red.bold("Error"));

// console.log(process.argv);

const yargs = require("yargs");
yargs.version("1.0.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  handler: function () {
    console.log("adding a new note");
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  handler: function () {
    console.log("removing a  note");
  },
});
yargs.command({
  command: "list",
  describe: "list all notes",
  handler: function () {
    console.log("listing all the notes");
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  handler: function () {
    console.log("reading a  note");
  },
});

console.log(yargs.argv);

// const command = process.argv[2];
// if (command === "add") {
//   console.log("Adding note");
// } else if (command === "remove") {
//   console.log("Removing note");
// }

// firstName = require("./utils.js");
// fs = require("fs");
// fs.writeFileSync("notes.txt", "created existing file ");
// fs.appendFileSync("notes.txt", "updated existing file ");
// const name = "Andrew";
// console.log(firstName);

// const add = require("./utils.js");
// const sum = add(4, -2);
// console.log(sum);

// const getNotes = require("./notes.js");
// console.log(getNotes());

// const validator = require("validator");
const getNotes = require("./notes.js");
// console.log(validator.isEmail("abc@def.com"));
// console.log(validator.isEmail("adef.com"));
// console.log(validator.isURL("https://google.com"));
// console.log(validator.isURL("https/google.com"));
