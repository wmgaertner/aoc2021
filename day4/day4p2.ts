import * as fs from 'fs';

const h = 5;
const w = 5;



fs.readFile("input.txt", function(err, data) {
    if (err) {
        return console.error(err);
    }
    let input = data.toString().split('\n');
    let matrixArray: number[][][] = [];

    for (let i = 1; i < input.length; i++) {
        if (input[i] == ''){
            let matrix:number[][] = [];
            for (let row = 0; row < h; row++) {
                matrix[row] = [0,0,0,0,0];
                let line = input[row+i+1].trim().split(/ +/);
                for (let col = 0; col < w; col++) {
                    matrix[row][col] = parseInt(line[col]);
                }
            }
            matrixArray.push(matrix);
        }
    }
    let drawnNumbers: number[] = [];
    let lastScore = 0;
    for (let num of input[0].split(',').map(string => parseInt(string))) {
        drawnNumbers.push(num);
        if (drawnNumbers.length > 4) {
            for (let matrix of matrixArray) {
                if (isBingo(matrix, drawnNumbers)) {
                    lastScore = calculateScore(matrix, drawnNumbers);
                    matrixArray.splice(matrixArray.indexOf(matrix), 1);
                }
            }
        }
    }
    console.log(lastScore);
})

function isBingo(matrix: number[][], drawnNumbers: number[]) {
    let bingo = false;


    for (let row = 0; row < h; row++) {
        if (drawnNumbers.includes(matrix[row][0])){
            if (checkNums(matrix[row], drawnNumbers)) {
                return bingo = true;
            }
        }
    }
    for (let col = 0; col < w; col++) {
        if (drawnNumbers.includes(matrix[0][col])){
            let column: number[] = matrix.map(row => row[col]);
            if (checkNums(column, drawnNumbers)) {
                return bingo = true;
            }
        }
    }
    
    return bingo;
}

function checkNums(numbersToCheck: number[], drawnNumbers: number[]) {
    return numbersToCheck.every(num => drawnNumbers.includes(num));
}

function calculateScore(matrix: number[][], drawnNumbers: number[]) {
    let score = 0;
    for (let row = 0; row < h; row++) {
        for (let col = 0; col < w; col++) {
            if (drawnNumbers.includes(matrix[row][col]) == false) {
                score += matrix[row][col];
            }
        }
    }
    score = score * drawnNumbers[drawnNumbers.length - 1];

    return score;
}
