const print = console.log;
const chalk = require("chalk");
const figlet = require("figlet");
print(chalk.red(figlet.textSync("Weather   Forecasting")));

// to import something
const help = require('./cmds/help');
const today = require('./cmds/today');
const input = process.argv.slice(2);
const loaction = input[1];
const cmd = input[0];

if(cmd == 'today'){
    today(location);
}else if (cmd == "forecast") {
} else if ((cmd = "help")) {
  help();

} else if (cmd == "version") {
} else {
  console.log("Wrong Command");
}