const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on(
    "data",
    (funcion = (data) => {
      let input = data.toString();
      let args = data.split(" ").slice(1).join(" ");
      let cmd = input.split(" ")[0].trim("");
      if (!commands[cmd]) print(`command not found: ${cmd}`);
      else commands[cmd](print, args);
    })
  );
}

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

bash();
module.exports = {
  print,
  bash,
};
