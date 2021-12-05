import * as fs from 'fs';


let increased = 0;
let start: number | null;
let middle: number | null;
let end: number | null;
let previous: number | null;

fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }

    let inputs = data.toString().split('\n');

    for (let input of inputs){
        if (start == null) {
            start = parseInt(input);
        }
        else if (middle == null) {
            middle = parseInt(input) + start;
            start = parseInt(input);
        }
        else if (end == null && previous != null) {
            end = parseInt(input) + middle;
            middle = parseInt(input) + start;
            start = parseInt(input);

            if (end > previous) {
                increased += 1;
            }
            previous = end;
            end = null;
        }
        else {
            previous = parseInt(input) + middle;
        }        
    }
    console.log("Increased count: " + increased);
})
