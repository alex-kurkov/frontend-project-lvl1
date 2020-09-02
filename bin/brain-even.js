#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetUser from '../src/cli.js';

const userName = greetUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

let counter = 0;
while (counter < 3) {
  const randomNumber = Math.ceil(Math.random() * 100);
  const isEvenNumber = (randomNumber % 2 === 0)
    ? 'yes'
    : 'no';

  console.log(`Question: ${randomNumber}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === isEvenNumber) {
    console.log('Correct!');
    counter += 1;
  } else {
    counter = 0;
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${isEvenNumber}".\nLet's try again, ${userName}!`);
  }
}

console.log(`Congratulations, ${userName}!`);
