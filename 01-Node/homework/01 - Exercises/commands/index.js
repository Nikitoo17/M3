const fs = require("fs");
const utils = require("../utils/request");
const process = require("process");

function pwd(print) {
  print(process.cwd());
}

function date(print) {
  print(Date());
}

function echo(print, args) {
  print(args);
}

function ls(print) {
  fs.readdir(".", (error, files) => {
    if (error) throw Error("Hubo un error");
    print(files.toString().split(",").join(" "));
  });
}

const readFile = (print, filename, lines) => {
  fs.readFile(filename, "utf-8", (error, data) => {
    if (error) throw Error("Hubo un error");
    !lines && print(data);
    lines === "head" && print(data.split("\n")[0]);
    lines === "tail" && print(data.split("\n").at(-1).trim());
  });
};

function cat(print, args) {
  readFile(print, args);
}

function head(print, args) {
  readFile(print, args, "head");
}

function tail(print, args) {
  readFile(print, args, "tail");
}

function curl() {}

module.exports = { pwd, date, echo, ls, cat, head, tail, curl };
