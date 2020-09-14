import startGame from '../index.js';
import getRandomInteger from '../utils/getRandomInteger.js';

const isPrime = (n) => {
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= (n / 2); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
};

export default () => {
  startGame({
    quizTask: 'Answer "yes" if given number is prime. Otherwise answer "no"',
    userAnswerIsNumber: null,
    gameLogicHandler: () => {
      const randomNumber = getRandomInteger(120);
      const correctAnswer = (isPrime(randomNumber))
        ? 'yes'
        : 'no';
      return { correctAnswer, question: `Question: ${randomNumber}` };
    },
  });
};
