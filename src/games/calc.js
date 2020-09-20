import startGame from '../index.js';
import getRandomIntegerFromRange from '../utils/getRandomIntegerFromRange.js';

const operators = ['+', '-', '*'];

const getRandomOperation = () => operators[getRandomIntegerFromRange(0, operators.length - 1)];

const getCorrectAnswer = (num1, num2, operator) => {
  switch (operator) {
    case '-':
      return num1 - num2;
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return new Error('Invalid operator parameter');
  }
};

export default () => {
  startGame({
    quizTask: 'What is the result of the expression?',
    gameLogicHandler: () => {
      const firstNumber = getRandomIntegerFromRange(1, 20);
      const secondNumber = getRandomIntegerFromRange(1, 10);
      const operator = getRandomOperation();
      const expression = `${firstNumber} ${operator} ${secondNumber}`;
      const correctAnswer = String(getCorrectAnswer(firstNumber, secondNumber, operator));

      return { correctAnswer, question: expression };
    },
  });
};
