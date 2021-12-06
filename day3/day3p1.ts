import * as fs from 'fs';

let gammaBinary: string[] = [];
let epsilonBinary: string[] = [];
let gammaRate: number;
let epsilonRate: number;
let ones: number[] = [];
let zeros: number[] = [];

fs.readFile("input.txt", function(err, data) {
    if (err) {
        return console.error(err);
    }

    let inputs = data.toString().split('\n');
    ones.length = inputs[0].length;
    zeros.length = inputs[0].length;
    gammaBinary.length = inputs[0].length;
    epsilonBinary.length = inputs[0].length;
    ones.fill(0);
    zeros.fill(0);
    for  (let input of inputs) {
        let line = input.split('');
        for (let i = 0; i < line.length; i++) {
            if (line.at(i) == '1') {
                ones[i]++;
            }
            else {
                zeros[i]++;
            }
        }
    }
    for (let i = 0; i < ones.length; i++) {
        if (ones[i] > zeros[i]) {
            gammaBinary[i] = '1';
            epsilonBinary[i] = '0';
        }
        else {
            gammaBinary[i] = '0';
            epsilonBinary[i] = '1';
        }
    }
    gammaRate = parseInt(gammaBinary.join(''), 2);
    epsilonRate = parseInt(epsilonBinary.join(''), 2);
    console.log(gammaRate * epsilonRate);
})