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
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    let row = 0;
    for(row = 1; row <= n; row++){
        printNSpaces(n - row);
        printNAsterics(row);
        '\n'
    }
   
}

function printNAsterics(n){
    let finishedRow = "";
    for(let i = 0; i < n; i++){
        finishedRow += "#";
    }
    console.log(finishedRow);
}

function printNSpaces(n){
    let finishedRow = "";
    for(let i = 0; i < n; i++){
        finishedRow += " ";
    }
    console.log(finishedRow);
}
function printNAsterics(n){
    let finishedRow = "";
    for(let i = 0; i < n; i++){
        finishedRow += "#";
    }
    console.log(finishedRow);
}

function printNSpaces(n){
    let finishedRow = "";
    for(let i = 0; i < n; i++){
        finishedRow += " ";
    }
    console.log(finishedRow);
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
