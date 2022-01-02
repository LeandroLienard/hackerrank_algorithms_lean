'use strict';

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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//{--
function plusMinus(arr) {   // solucion hecha con subfunciones pero recorro el array 3 veces(1 por subfuncion)
    showPositiveRatio(arr);
    showNegativeRatio(arr);
    showZerosRatio(arr);
}

function showPositiveRatio(arr){
    let i = 0; 
    let positivesCount = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positivesCount++;
        }
    }
    console.log(positivesCount / arr.length);
}

function showNegativeRatio(arr){
    let i = 0;
    let negativesCount = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            negativesCount ++;
        }
    }
    console.log(negativesCount / arr.length);
}

function showZerosRatio(arr){
    let i = 0;
    let zerosCount = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            zerosCount++;
        }
    }
    console.log(zerosCount / arr.length);
}
// --}
function plusMinus2(arr) {   // solucion recorriendo array 1 SOla vez, pero mas fea?
    let i = 0; 
    let positivesCount = 0, negativesCount=0, zerosCount = 0;

    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            positivesCount++;
        }else if(arr[i] < 0){
            negativesCount++;
        }else if(arr[i] == 0){
            zerosCount++;
        }
    }
    console.log(positivesCount / arr.length);
    console.log(negativesCount / arr.length);
    console.log(zerosCount / arr.length);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
