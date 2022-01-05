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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) { 
    // Write your code here
    return grades.map(note => processNote(note));
    // rango 0-100 : aprobado >= 40 ; desapronado < 40 

}
function processNote(note){
    if(note < 38 ){     // desaprobo
        return note;
    }else{              // aprobo
        if (differenceBtw(note, nextMultipleOfFIve(note) ) < 3){
            return nextMultipleOfFIve(note);
        }else{
            return note;
        }
    }
}

function differenceBtw(aNum, bNum){
    return Math.abs(aNum - bNum);
}

function nextMultipleOfFIve(note){
    let remainder = note % 5;  
    if ( remainder == 0)
        return note;
    else 
        return note + (5 - remainder);
}   

//    const isAprobbed = (num) => num >=40; 
    
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
