import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';
const isPrime = (n) => {
  if (n <= 1) return false;
  for (let i = 2; i <= (n / 2); i += 1) {
    if (n % i === 0) return false;
  }
  return true;
};
const generateRoundData = () => {
  const randomNumber = getRandomIntFromRange(1, 120);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  return { correctAnswer, question: randomNumber };
};

export default () => playGame(taskDescription, generateRoundData);
