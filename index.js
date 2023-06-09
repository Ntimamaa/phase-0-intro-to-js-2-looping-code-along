function writeCards(names) {
  const messages = [
    // `Thank you, ${Aki}, for the wonderful surprise gift!`,
    // `Thank you, ${Ollie}, for the wonderful surprise gift!`,
    // `Thank you, ${Guadalupe}, for the wonderful surprise gift!`
  ];
  let name;
  for (name of names) {
     messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
  }
  return messages;
}
console.log(writeCards("Guadalupe"))
console.log(writeCards("Aki"))
console.log(writeCards("Ollie"))



function countDown(number) {
  const countdownArray = [];//empty array
  for (let i = number; i >= 0; i--) {
    countdownArray.push(i);
  }
  for (let i = 0; i < countdownArray.length; i++) {
    console.log(countdownArray[i]);
  }

}

