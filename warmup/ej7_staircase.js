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
        let spaces = printNSpaces(n - row);
        let asterics = printNAsterics(row);
        
        console.log(spaces + asterics);
    }
   
}

function printNAsterics(n){
    let astericsPrintables = "";
    for(let i = 0; i < n; i++){
        astericsPrintables += "#";
    }
    return astericsPrintables;
}

function printNSpaces(n){
    let spacesPrintables = "";
    for(let i = 0; i < n; i++){
        spacesPrintables += " ";
    }
    return spacesPrintables;
}
function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}

staircase(5);