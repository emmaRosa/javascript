'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function vowelsAndConsonants(s) {
    var allvowels='aeiou'
    var vowels='',consonants='';
    for (var i of s) {
        if (allvowels.indexOf(i) !== -1) {
            vowels += i;
        } else {
            consonants += i;
        }
    }
    var result = vowels + consonants;
    for (i of result) console.log(i);
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
