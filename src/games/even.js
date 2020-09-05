import {
  getRandomInteger, consoleMessage,
} from '../index.js';
import {
  greetAndGetUserName, getAnswer, congratulate,
} from '../cli.js';

export default () => {
  const user = greetAndGetUserName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInteger(120);
    const correctAnswer = (randomNumber % 2 === 0)
      ? 'yes'
      : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = getAnswer();
    const isRightAnswer = correctAnswer === userAnswer;
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
  congratulate(user);
};
