import startGame from '../index.js';
import getRandomIntegerFromRange from '../utils/getRandomIntegerFromRange.js';

const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= (n / 2); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};

export default () => {
  startGame({
    quizTask: 'Answer "yes" if given number is prime. Otherwise answer "no"',
    gameLogicHandler: () => {
      const randomNumber = getRandomIntegerFromRange(1, 120);
      const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
      return { correctAnswer, question: randomNumber };
    },
  });
};
