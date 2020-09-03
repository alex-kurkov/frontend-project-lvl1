import readlineSync from 'readline-sync';
import {
  getRandomInteger,
  checkAnswer,
  consoleMessage,
} from '../src/index.js';
import getGcd from '../src/getGcd.js';

export default (user) => {
  let counter = 0;
  while (counter < 3) {
    const firstNumber = getRandomInteger(50);
    const secondNumber = getRandomInteger(100);

    const correctAnswer = getGcd(firstNumber, secondNumber);

    console.log(`Question: ${firstNumber} ${secondNumber}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));
    const isRightAnswer = checkAnswer(correctAnswer, userAnswer);
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
};
