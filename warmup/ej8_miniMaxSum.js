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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here,
    let minimalSum = getMinimalSum(arr);
    let maximalSum = getMaximalSum(arr);
    
    console.log(minimalSum, maximalSum);
}

function getMinimalSum(arr){
    return sum(arr) - maximum(arr);
}

function getMaximalSum(arr){
    return sum(arr) -  minimum(arr);
}

function maximum(arr){
    let max = arr[0], i=0 ;
    for(i = 0; i< arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }
    }
    return max;
}

function minimum(arr){
    let min = arr[0], i=0 ;
    for(i = 0; i< arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}

function sum(arr){
    let i = 0, sum = 0;
    for(i = 0; i< arr.length; i++){
        sum += arr[i];
    }
    return sum;
}



function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
