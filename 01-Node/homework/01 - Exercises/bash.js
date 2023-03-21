const process = require("process");
const { Z_ASCII } = require("zlib");
const commands = require("./commands/index.js");

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on(
    "data",
    (funcion = (data) => {
      let args = data.toString();
      let cmd = args.split(" ")[0].trim("");
      let value = true;
      for (const prop in commands) {
        if (cmd === prop) {
          value = true;
          return commands[cmd](print(data.split(" ").slice(1).join(" ")));
          //commands.prop(print, args);
        } else {
          value = false;
        }
      }
      if (!value) {
        print(`command not found: ${cmd}`);
      }
    })
  );
}
// function funcion(data) {
//   let args = "" + data;
//   let cmd = args.split(" ")[0];
// }

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

bash();
module.exports = {
  print,
  bash,
};
