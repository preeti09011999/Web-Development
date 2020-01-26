// require => readline
const readline = require("readline");
const print = console.log;
const chalk = require("chalk");
const figlet = require("figlet");


// interface
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: ">"
});
console.clear();
print(chalk.red(figlet.textSync("Tasker")));


// prompt
reader.prompt();
var arr = [];
// => data => input

reader.on("line",function(data){
    const cmd = data.split(" ")[0];
    const dataArr = data.split(" ");
    dataArr.shift();
    var task = dataArr.join(" ");
    if(cmd == "help"){
        print(`Available commands:
                1. add task_name
                2. ls (to list all tasks)
                3. delete id (enter task id to delete it`
            )} 
   
    else if(cmd == "add"){
        arr.push(task);
        print("one task added");
    }
    else if(cmd == "ls"){
        for(let i = 0; i<arr.length;i++){
            print(chalk.green(`${i + 1} is ${arr[i]}`));
        }
    }
    else if(cmd == "delete" && arr.length){
        const id = arr.split(" ")[0];
        arr.splice(id-1,1);
        print(chalk.green("one task deleted"));
    }
    else{
        print("Wrong Command");
    }
    reader.prompt();
})

