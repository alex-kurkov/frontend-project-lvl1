import startGame from '../index.js';
import getRandomInteger from '../utils/getRandomInteger.js';

const getRandomOperation = () => {
  switch (getRandomInteger(3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};

export default () => {
  startGame({
    quizTask: 'What is the result of the expression?',
    userAnswerIsNumber: true,
    gameLogicHandler: () => {
      const firstNumber = getRandomInteger(20);
      const secondNumber = getRandomInteger(10);
      const operation = getRandomOperation();
      const expression = `${firstNumber} ${operation} ${secondNumber}`;
      // eslint-disable-next-line no-eval
      const correctAnswer = eval(expression);

      return { correctAnswer, question: `Question: ${expression}` };
    },
  });
};
