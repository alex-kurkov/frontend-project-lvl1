import startGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  startGame('Answer "yes" if the number is even, otherwise answer "no".', () => {
    const randomNumber = getRandomIntFromRange(1, 120);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return { correctAnswer, question: randomNumber };
  });
};
