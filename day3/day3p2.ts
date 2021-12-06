import * as fs from 'fs';




fs.readFile("input.txt", function(err, data) {
    if (err) {
        return console.error(err);
    }
    let input = data.toString().split('\n');
    let oxyRating: string[] = [];
    let c02Rating: string[] = [];
    for (let index = 0; index < input[0].length; index++){
        if (index == 0) {
            oxyRating = iterateArray(input, index, true);
            c02Rating= iterateArray(input, index, false);
        }
        else {
            oxyRating = iterateArray(oxyRating, index, true);
            c02Rating = iterateArray(c02Rating, index, false);
        }
    }
    let oxyAmount = parseInt(oxyRating.join(''), 2);
    let c02Amount = parseInt(c02Rating.join(''), 2);
    console.log(oxyAmount * c02Amount);

})

function filterArray(arr: string[], index: number, filter: string) {
    return arr.filter(binary => binary[index] === filter);
}

function iterateArray(arr: string[], index: number, oxy: boolean) {
    let newArray: string[] = [];
    let zero = 0;
    let one = 0;


    if (arr.length === 1) {
        return arr;
    }

    for (let line of arr) {
        if (line[index] == '1') {
            one++;
        }
        else {
            zero++;
        }
    }
    
    if (oxy) {
        if (one >= zero) {
            newArray = filterArray(arr, index, '1');
        }
        else {
            newArray = filterArray(arr, index, '0');
        }
    }
    else {
        if (one >= zero) {
            newArray = filterArray(arr, index, '0');
        }
        else {
            newArray = filterArray(arr, index, '1');
        }
    }
    return newArray;
}