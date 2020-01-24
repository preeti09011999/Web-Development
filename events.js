const events = require("events");
const eventEmitter = new events();
//server side 
eventEmitter.on("login",function(email, password) {
    if(email == "abc@gmail.com" && password == 12345678){
        console.log("User Verified");
    }
    else{
        console.log("User not Verified");
    }
});

//email => abc@admin.com
eventEmitter.on("login",function(email, password) {
    if(email == "abc@admin.com" && password == 1234){
        console.log("welcome admin");
    }
    else{
        console.log("you are not admin");
    }
});

// client
eventEmitter.emit("login","abc@gmail.com",12345678);
eventEmitter.emit("login","abc@admin.com",1234);