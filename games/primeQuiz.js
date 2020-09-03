import readlineSync from 'readline-sync';
import {
  getRandomInteger,
  checkAnswer,
  consoleMessage,
} from '../src/index.js';
import isPrime from '../src/isPrime.js';

export default (user) => {
  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInteger(99);
    const correctAnswer = (isPrime(randomNumber))
      ? 'yes'
      : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isRightAnswer = checkAnswer(correctAnswer, userAnswer);
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
};
