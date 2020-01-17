var fs = require('fs');
//input
var lecture = process.argv[2];
for(var i=1; i<=50;i++){
    //for undefined input
    if(lecture+i==undefined){
        console.log("Please enter folderName");
        return;
    }
    //folder Creation
    fs.mkdirSync(lecture+i);
    //print
    console.log("folder"+lecture+"has been created");

    //duplicate folders
    if(fs.existsSync(lecture+i) == false){
        console.log(lecture+i+"does not exist");
        continue;
    }

    //delete folders
    fs.rmdirSync(lecture+i);
    //print
    console.log("Folder"+lecture+i+"has been deleted");
}
