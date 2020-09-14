import startGame from '../index.js';
import getRandomInteger from '../utils/getRandomInteger.js';

const getGcd = (firstNum, secondNum) => {
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
    userAnswerIsNumber: true,
    gameLogicHandler: () => {
      const firstNumber = getRandomInteger(50);
      const secondNumber = getRandomInteger(100);
      const correctAnswer = getGcd(firstNumber, secondNumber);
      return { correctAnswer, question: `Question: ${firstNumber} ${secondNumber}` };
    },
  });
};
