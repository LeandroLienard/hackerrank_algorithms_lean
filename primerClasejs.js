/*
let note = 55
let resto = note % 5;
console.log(resto);

let nextMultiple = note + (5 - resto);


console.log(nextMultiple);

function between(x, z){ 
    return function isInsideRange(y){
        return (x <= y) && (y <= z);
    }
}

let cayoEnElRango = between(5, 10);
console.log(cayoEnElRango(7) );

*/
function createListOfBetweeners(lowEnd, highEnd){
    var list = [];
    for (var i = lowEnd; i <= highEnd; i++) {
        list.push(i);
    }
    return list;
}
console.log(createListOfBetweeners(2, 10));
