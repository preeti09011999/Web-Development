const arr = [1,2,3,4,5,6];
function doubleIt(x){
    return x*2;
}
function squarer(x){
    return x*x;
}

const sArr = arr.map(squarer);
const vArr = arr.map(doubleIt);
console.log(sArr );
console.log(vArr );
