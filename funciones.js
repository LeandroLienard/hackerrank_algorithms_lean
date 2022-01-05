
// MAXIMOS Y MINIMOS de arrays
Array.prototype.max = function() {
    return Math.max.apply(null, this);
};
  
Array.prototype.min = function() {  
    return Math.min.apply(null, this);
};

//
function createListOfBetweeners(lowEnd, highEnd){
    var list = [];
    for (var i = lowEnd; i <= highEnd; i++) {
        list.push(i);
    }
    return list;
}

// between 
function between(x, z){ 
    return function isInsideRange(y){
        return (x <= y) && (y <= z);
    }
}