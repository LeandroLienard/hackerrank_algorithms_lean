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
function plusMinus(arr) {   // solucion linda pasando funcs por parametros :)
    showRatioSegunCriterio(arr, isPositive);
    showRatioSegunCriterio(arr, isNegative);
    showRatioSegunCriterio(arr, isZero);
}

function showRatioSegunCriterio(arr, cond){
    let i = 0; 
    let positivesCount = 0;

    for(i = 0; i < arr.length; i++){
        if(cond(arr[i]) ){              // aplicacion parcial: paso cond por parametro
            positivesCount++;
        }
    }
    console.log(positivesCount / arr.length);
}

function isPositive(num){   return num > 0;}
function isNegative(num){   return num < 0;}
function isZero(num)    {   return num == 0;}

// declaradas como const
const esPar = (num) => num%2 == 0;

const isPositive2 = (num) => num > 0; 
const isNegative2 = (num) => num < 0;
const isZero2 = (num) => num == 0;
// --}

/*
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
*/

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
