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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    if (s.slice(8,10) == "PM"){
        return convertPmToMilitary(s); 
    }else{
        return converAmToMilitary(s);
    }
}
function converAmToMilitary(s){
    let hour = parseInt(s.slice(0, 2));

    if(hour != 12){
       return s.slice(0,8);
    }else{

        return "00" + s.slice(2,8); 

    }

}
function convertPmToMilitary(s){
    let hour = parseInt(s.slice(0, 2));
    if(hour < 12  ){
        hour +=  12;
    }else if(hour >= 24){
        hour = hour -24;
    } 
    return parseInt(hour) + s.slice(2,8); 
}
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
