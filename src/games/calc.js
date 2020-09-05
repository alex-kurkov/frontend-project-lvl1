import {
  getRandomInteger, consoleMessage, getRandomOperation,
} from '../index.js';
import {
  greetAndGetUserName, getAnswer, congratulate,
} from '../cli.js';

export default () => {
  const user = greetAndGetUserName();

  console.log('What is the result of the expression?\n');

  let counter = 0;
  while (counter < 3) {
    const firstNumber = getRandomInteger(20);
    const secondNumber = getRandomInteger(10);
    const operation = getRandomOperation();
    const expression = `${firstNumber} ${operation} ${secondNumber}`;
    // eslint-disable-next-line no-eval
    const correctAnswer = eval(expression);

    console.log(`Question: ${expression}`);

    const userAnswer = Number(getAnswer());
    const isRightAnswer = correctAnswer === userAnswer;
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
  congratulate(user);
};
