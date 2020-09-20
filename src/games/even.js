import startGame from '../index.js';
import getRandomIntegerFromRange from '../utils/getRandomIntegerFromRange.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  startGame({
    quizTask: 'Answer "yes" if the number is even, otherwise answer "no".',
    gameLogicHandler: () => {
      const randomNumber = getRandomIntegerFromRange(1, 120);
      const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
      return { correctAnswer, question: randomNumber };
    },
  });
};
