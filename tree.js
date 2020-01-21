let fs = require('fs');
let path = require('path');

function filesInDir(pathname){
    if( fs.lstatSync(pathname).isDirectory() )
        return fs.readdirSync(pathname)
}

files = filesInDir(__dirname);
for ( let i=0;i<files.length;i++ )
    console.log(fs.lstatSync(files[i]).isDirectory());