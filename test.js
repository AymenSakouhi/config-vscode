// this game is just for testing purposes, copilot generated it for me.

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const maxAttempts = 10;
let attempts = 0;
const randomNumber = Math.floor(Math.random() * 100) + 1;

console.log('Welcome to the Number Guessing Game!');
console.log('I have selected a random number between 1 and 100.');
console.log(`You have ${maxAttempts} attempts to guess it.`);

const askQuestion = () => {
  rl.question('Enter your guess: ', (answer) => {
    const guess = parseInt(answer, 10);
    attempts++;

    if (isNaN(guess)) {
      console.log('Please enter a valid number.');
    } else if (guess < randomNumber) {
      console.log('Too low!');
    } else if (guess > randomNumber) {
      console.log('Too high!');
    } else {
      console.log(`Congratulations! You guessed the number in ${attempts} attempts.`);
      rl.close();
      return;
    }

    if (attempts < maxAttempts) {
      askQuestion();
    } else {
      console.log(`Sorry, you've used all ${maxAttempts} attempts. The number was ${randomNumber}.`);
      rl.close();
    }
  });
};

askQuestion();