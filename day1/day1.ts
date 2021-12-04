import * as fs from 'fs';


let increased = 0;
let previous: number | null;

fs.readFile('input.txt', function(err, data) {
    if (err) {
        return console.error(err);
    }

    let inputs = data.toString().split('\n');

    for (let input of inputs){
        if (previous !== null) {
            if (parseInt(input) > previous) {
                increased += 1;
            }
            previous = parseInt(input);
        }
        else {
            previous = parseInt(input);
        }
    }
    console.log("Increased count: " + increased);
})
