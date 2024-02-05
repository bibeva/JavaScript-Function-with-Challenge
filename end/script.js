// Create a function that generates a random number
function generateRandomNumber(upper = 10) {
  if(isNaN(upper)) {
    throw Error('Argument must be number.');
  }
  return Math.floor(Math.random() * upper) + 1;
}

// Call the function and pass different values
console.log(`${generateRandomNumber(100)} is the number between 1 and 100`);
console.log(generateRandomNumber());
console.log(generateRandomNumber('ten'));