import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));
const generateRoundData = () => {
  const firstNumber = getRandomIntFromRange(0, 50);
  const secondNumber = getRandomIntFromRange(0, 100);
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  return { correctAnswer, question: `${firstNumber} ${secondNumber}` };
};

export default () => playGame(taskDescription, generateRoundData);
