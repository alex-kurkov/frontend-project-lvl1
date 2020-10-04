import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';
const getGcd = (firstNum, secondNum) => {
  if (firstNum === 0 && secondNum === 0) return null;
  let devider = Math.min(firstNum, secondNum);
  while (devider > 1) {
    if ((firstNum % devider === 0) && (secondNum % devider === 0)) return devider;
    devider -= 1;
  }
  return devider;
};
const generateRoundData = () => {
  const firstNumber = getRandomIntFromRange(0, 50);
  const secondNumber = getRandomIntFromRange(0, 100);
  const correctAnswer = String(getGcd(firstNumber, secondNumber));
  return { correctAnswer, question: `${firstNumber} ${secondNumber}` };
};

export default () => playGame(taskDescription, generateRoundData);
