const print = console.log;
const chalk = require("chalk");
const figlet = require("figlet");
print(chalk.red(figlet.textSync("Weather   Forecasting")));

// to import something
const help = require('./cmds/help');
const today = require('./cmds/today');
const forecast = require('./cmds/forecast');
const minimist = require("minimist");
const input = process.argv.slice(2);
const parsedInput = minimist(input);
// console.log(parsedInput);
const location = parsedInput.l || parsedInput.location;
// console.log(location)
const cmd = parsedInput["_"][0];

// const location = input[1];
// const cmd = input[0];

if(cmd == 'today'){
    today(location);
}else if (cmd == "forecast") {
    forecast(location)
} else if ((cmd = "help")) {
  help();

} else if (cmd == "version") {
} else {
  console.log("Wrong Command");
}