import * as fs from 'fs';

let x = 0, y = 0;


fs.readFile("input.txt", function(err, data) {
    if (err) {
        return console.log(err);
    }

    let inputs = data.toString().split('\n');
    for (let input of inputs){
        let input_split = input.split(' ');
        let movement = input_split[0];
        let value = parseInt(input_split[1]);

        if (movement.toLowerCase() === 'up'){
            y = goUp(y, value);
        }
        else if (movement.toLowerCase() === 'down'){
            y = goDown(y, value);
        }
        else if (movement.toLowerCase() === 'forward'){
            x = goForward(x, value);
        }
    }


    console.log(x*y);
});

function goForward(x_pos: number, value: number) {
    return x_pos + value;
}

function goUp(depth: number, value: number) {
    return depth - value;
}

function goDown(depth: number, value: number) {
    return depth + value;
}