import {
  getRandomInteger, consoleMessage,
} from '../index.js';
import isPrime from '../isPrime.js';
import {
  greetAndGetUserName, getAnswer, congratulate,
} from '../cli.js';

export default () => {
  const user = greetAndGetUserName();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInteger(99);
    const correctAnswer = (isPrime(randomNumber))
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
