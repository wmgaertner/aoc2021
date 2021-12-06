import * as fs from 'fs';

let x = 0, y = 0, aim = 0;


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
            aim = goUp(aim, value);
        }
        else if (movement.toLowerCase() === 'down'){
            aim = goDown(aim, value);
        }
        else if (movement.toLowerCase() === 'forward'){
            [x, y] = goForward(x, y, aim, value);
        }
    }


    console.log("Horizontal pos: ", x, "\nDepth: ", y, "\n", x*y);
});

function goForward(x_pos: number, depth: number, aim_input: number, value: number) {
    
    return [x_pos + value, depth + aim_input * value];
}

function goUp(aim_input: number, value: number) {
    
    return aim_input - value;
}

function goDown(aim_input: number, value: number) {
    
    return aim_input + value;
}