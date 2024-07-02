const args = process.argv.slice(2);

if (args.length > 0) {
  const input = args[0];
  const regex = /^[0-9LlWwRr]+$/;

  if (regex.test(input)){
    console.log(input);
    const splited_input = input.split('');
    console.log(splited_input)
  } else {
    console.log('Invalid. Input only contain numbers and L,W,R');
  }
  

} else {
  console.log('X: 0 Y: 0 Direction: North');
}
