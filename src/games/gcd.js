import startGame from '../index.js';
import getRandomIntegerFromRange from '../utils/getRandomIntegerFromRange.js';

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
  startGame({
    quizTask: 'Find the greatest common divisor of given numbers.',
    gameLogicHandler: () => {
      const firstNumber = getRandomIntegerFromRange(0, 50);
      const secondNumber = getRandomIntegerFromRange(0, 100);
      const correctAnswer = String(getGcd(firstNumber, secondNumber));
      return { correctAnswer, question: `${firstNumber} ${secondNumber}` };
    },
  });
};
