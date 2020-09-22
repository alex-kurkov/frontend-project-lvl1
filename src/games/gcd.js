import startGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const getGcd = (firstNum, secondNum) => {
  if (firstNum === 0 && secondNum === 0) return null;
  let devisor = Math.min(firstNum, secondNum);
  while (devisor > 1) {
    if ((firstNum % devisor === 0) && (secondNum % devisor === 0)) return devisor;
    devisor -= 1;
  }
  return devisor;
};

export default () => {
  startGame('Find the greatest common divisor of given numbers.', () => {
    const firstNumber = getRandomIntFromRange(0, 50);
    const secondNumber = getRandomIntFromRange(0, 100);
    const correctAnswer = String(getGcd(firstNumber, secondNumber));
    return { correctAnswer, question: `${firstNumber} ${secondNumber}` };
  });
};
