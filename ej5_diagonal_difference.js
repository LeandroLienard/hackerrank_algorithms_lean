'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {      // cod hecho
    var regularTrace = 0, inverseTrace =0;  // uso palabra trace means "traza" en algebra: la traza es la suma de la diagonal
    let i,j =0;
    
    for(i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            if (i == j){
                regularTrace += arr[i][j]; 
            }
            if (i + j == arr.length - 1){
                inverseTrace += arr[i][j];
            }
        }
    }
    return  Math.abs(regularTrace - inverseTrace);
}

// Otro prototipo de sol
function diagonalDifference(arr) {      // cod hecho
    var regularTrace = getRegularTrace(arr),        // falta implementar 
    var inverseTrace = getInverseTrace(arr);        // falta implementar  
    
    return  Math.abs(regularTrace - inverseTrace);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
