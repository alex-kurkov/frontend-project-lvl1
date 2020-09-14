import startGame from '../index.js';
import getRandomInteger from '../utils/getRandomInteger.js';

export default () => {
  startGame({
    quizTask: 'Answer "yes" if the number is even, otherwise answer "no".',
    userAnswerIsNumber: null,
    gameLogicHandler: () => {
      const randomNumber = getRandomInteger(120);
      const correctAnswer = (randomNumber % 2 === 0)
        ? 'yes'
        : 'no';
      return { correctAnswer, question: `Question: ${randomNumber}` };
    },
  });
};
