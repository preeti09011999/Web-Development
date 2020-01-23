// Que Build string using map function  first character of each string of array

// var animals = ['Hen','elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];



var animals = ['Hen','elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
function secretMessage(str){

    var ast = str.charAt(0);
    return ast;
}

const arr = animals.map(secretMessage);
console.log(arr.join(""));
