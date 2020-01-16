var arr = [];
var x;
function dectobin(x){
while(x!=0){ 
        var i = x % 2;
        x = Math.floor(x/2);
        arr.push(i);
        

    }
    return arr;
}

var t = dectobin(13);
console.log(t);