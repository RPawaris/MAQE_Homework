"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// This part is used to create a command-line based script in Javascript
const process = __importStar(require("process"));
//validate input
const args = process.argv.slice(2);
if (args.length > 0) {
    const inputs = args[0];
    const regex = /^[0-9LlWwRr]+$/;
    if (!regex.test(inputs)) {
        console.log("Invalid. Input only contain numbers and L,W,R");
        process.exit(1);
    }
    //This part is used for initial variable
    let x = 0;
    let y = 0;
    let direction = "North";
    const directions = ["North", "East", "South", "West"];
    let i = 0;
    // Used while for all character in input
    while (i < inputs.length) {
        // Turn condition
        let input = inputs[i];
        if (input === "L" || input === "l" || input === "R" || input === "r") {
            // get direction index 0-3
            let index = directions.indexOf(direction);
            //set direction couter clockwise
            if (input === "L" || input === "l") {
                direction = directions[(index + 3) % 4];
                //set direction clockwise
            }
            else if (input === "R" || input === "r") {
                direction = directions[(index + 1) % 4];
            }
            i++;
            //walk condition
        }
        else if (input === "W" || input === "w") {
            i++;
            //store steps from input
            let str_steps = '';
            while (i < inputs.length && /[0-9]/.test(inputs[i])) {
                //use for store all digit in steps
                str_steps += inputs[i];
                i++;
            }
            //convert steps to int
            let steps = parseInt(str_steps, 10);
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
        }
        else {
            //Just in case
            console.log('Invalid input detected.');
            process.exit(1);
        }
    }
    //Log result
    console.log(`X: ${x} Y: ${y} Direction: ${direction}`);
}
else {
    //Log result in case of no input provided
    console.log("No input.\nX: 0 Y: 0 Direction: North");
    process.exit(1);
}
