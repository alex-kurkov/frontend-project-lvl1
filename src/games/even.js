import readlineSync from 'readline-sync';
import {
  getRandomInteger,
  consoleMessage,
} from '../index.js';

export default (user) => {
  let counter = 0;
  while (counter < 3) {
    const randomNumber = getRandomInteger(120);
    const correctAnswer = (randomNumber % 2 === 0)
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
