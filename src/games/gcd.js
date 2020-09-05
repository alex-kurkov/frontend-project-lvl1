import {
  getRandomInteger, consoleMessage,
} from '../index.js';
import {
  greetAndGetUserName, getAnswer, congratulate,
} from '../cli.js';
import getGcd from '../getGcd.js';

export default () => {
  const user = greetAndGetUserName();

  console.log('Find the greatest common divisor of given numbers.');

  let counter = 0;
  while (counter < 3) {
    const firstNumber = getRandomInteger(50);
    const secondNumber = getRandomInteger(100);

    const correctAnswer = getGcd(firstNumber, secondNumber);

    console.log(`Question: ${firstNumber} ${secondNumber}`);

    const userAnswer = Number(getAnswer());
    const isRightAnswer = correctAnswer === userAnswer;
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
  congratulate(user);
};
