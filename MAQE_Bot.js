const args = process.argv.slice(2);

if (args.length > 0) {
  const inputs = args[0];
  const regex = /^[0-9LlWwRr]+$/;

  if (!regex.test(inputs)) {
    console.log("Invalid. Input only contain numbers and L,W,R");
    process.exit(1);
  }

  let x = 0,y = 0;
  let direction = "North";
  const directions = ["North", "East", "South", "West"];
  let i = 0;
  while (i < inputs.length) {
    let input = inputs[i];
    if (input === "L" || input === "l" || input === "R" || input === "r") {
      let index = directions.indexOf(direction);
      if (input === "L" || input === "l") {
        direction = directions[(index + 3) % 4];
      }else if (input === "R" || input === "r"){
        direction = directions[(index + 1) % 4];
      }
      i++;
    } else if (input === "W" || input === "w") {
      i++;
      let str_steps = '';
      while (i< input.length && /[0-9]/.test(input[i])){
        str_steps+= input[i];
        i++;
      }
      let steps = parseInt(str_steps, 10);
      console.log(steps)
    } else {
      console.log(input);
      i++;
      // console.log('Invalid. Input only contain numbers and L,W,R');
      // process.exit(1);
    }
  }
  console.log(`X: ${x} Y: ${y} Direction: ${direction}`)
} else {
  console.log("X: 0 Y: 0 Direction: North");
  process.exit(1);
}
