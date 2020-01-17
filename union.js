var arr1 = [1,2,3];
var arr2 = [100, 2, 1, 10];
var n = arr2.length;

for(var i =0; i<n ;i++){
    if(arr1.includes(arr2[i])==false){
        arr1.push(arr2[i]);
    }
}

console.log(arr1);
