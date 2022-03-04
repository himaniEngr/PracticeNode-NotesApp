// import chalk from "chalk";
// const chalk = require("chalk");
// console.log(chalk.green("Success"));

const chalk = require("chalk");
const notes = require("./notes.js");

console.log(chalk.red.bold("Error"));

// console.log(process.argv);

const yargs = require("yargs");
yargs.version("1.0.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "New title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "body arg",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
    // console.log("title: ", argv.title);
    // console.log("body: ", argv.body);
  },
});

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "list all notes",
  handler() {
    notes.listNotes();
  },
});
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title:{
      describe:'note title',
      demandOption: true,
      type:'string',
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
});
yargs.parse();
// console.log(yargs.argv);

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
// console.log(validator.isEmail("abc@def.com"));
// console.log(validator.isEmail("adef.com"));
// console.log(validator.isURL("https://google.com"));
// console.log(validator.isURL("https/google.com"));
