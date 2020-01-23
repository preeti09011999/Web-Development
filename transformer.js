// Q3 Write  transformer function that accepts doubleIt function and multiply every element by 2 without mutating actual array 
//   arr[1,2,3,4,5,6]
// narr[2,4,6,8,10,12]

function doubleIt(n){
    return n*2;
}

function transformer(){
    arr = [1,2,3,4,5,6];
    var ary = [];
    var l = arr.length;
    for(var i = 0; i<l;i++){
        ary.push(doubleIt(arr[i]));
    }
    return ary;
}
console.log(transformer());