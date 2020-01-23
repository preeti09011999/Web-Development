function doubleIt(n){
    return n*2;
}

function transformer(){
    arr = [1,2,3,4,5];
    var ary = [];
    var l = arr.length;
    for(var i = 0; i<l;i++){
        ary.push(doubleIt(arr[i]));
    }
    return ary;
}
console.log(transformer());