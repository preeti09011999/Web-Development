// Q4 Write includer function that accepts isOdd  function and filter even values from actual array without mutating actual array
// arr[5,8,14,17,23,6,8]
// narr[5,17,23]
const arr = [5,8,14,17,23,6,8];
const varr = [];
function isOdd(n){
        return n%2 == 1;
    }


 function includer(arr, isOdd){
     for(let i = 0;i<arr.length;i++){
         if(isOdd(arr[i])){
             varr.push(arr[i])
         }
     }
     return varr;
 }
const sarr = includer(arr, isOdd);
console.log(sarr);
console.log(arr);