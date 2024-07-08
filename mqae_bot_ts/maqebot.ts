// This part is used to create a command-line based script in Javascript
import * as process from 'process';

//validate input
const args: string[] = process.argv.slice(2)

if (args.length > 0) {
    const inputs: string = args[0]
    const regex: RegExp = /^[0-9LlWwRr]+$/;
    if (!regex.test(inputs)) {
        console.log("Invalid. Input only contain numbers and L,W,R");
        process.exit(1);
    }
    //This part is used for initial variable
    let x: number = 0;
    let y: number = 0;
    let direction: string = "North";
    const directions: string[] = ["North", "East", "South", "West"];
    let i: number = 0;
    // Used while for all character in input
    while (i < inputs.length) {
        // Turn condition
        let input: string = inputs[i];
        if (input === "L" || input === "l" || input === "R" || input === "r") {
            // get direction index 0-3
            let index: number = directions.indexOf(direction);
            //set direction couter clockwise
            if (input === "L" || input === "l") {
                direction = directions[(index + 3) % 4];
                //set direction clockwise
            } else if (input === "R" || input === "r") {
                direction = directions[(index + 1) % 4];
            }
            i++;
            //walk condition
        } else if (input === "W" || input === "w") {
            i++;
            //store steps from input
            let str_steps: string = '';
            while (i < inputs.length && /[0-9]/.test(inputs[i])) {
                //use for store all digit in steps
                str_steps += inputs[i];
                i++;
            }
            //convert steps to int
            let steps: number = parseInt(str_steps, 10);
            //manage steps with direction and defind x,y coordinate
            switch (direction) {
                case 'North':
                    y += steps;
                    break;
                case 'East':
                    x += steps;
                    break;
                case 'South':
                    y -= steps;
                    break;
                case 'West':
                    x -= steps;
                    break;
            }
        } else {
            //Just in case
            console.log('Invalid input detected.');
            process.exit(1);
        }
    }
    //Log result
    console.log(`X: ${x} Y: ${y} Direction: ${direction}`)
} else {
    //Log result in case of no input provided
    console.log("No input.\nX: 0 Y: 0 Direction: North");
    process.exit(1);
} 