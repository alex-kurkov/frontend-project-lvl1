import readlineSync from 'readline-sync';
import {
  getRandomInteger,
  consoleMessage,
} from '../index.js';
import isPrime from '../isPrime.js';

export default (user) => {
  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInteger(99);
    const correctAnswer = (isPrime(randomNumber))
      ? 'yes'
      : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isRightAnswer = correctAnswer === userAnswer;
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
};
