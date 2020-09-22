import startGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const operators = ['+', '-', '*'];

const getRandomItem = (array) => array[getRandomIntFromRange(0, array.length - 1)];

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
  startGame('What is the result of the expression?', () => {
    const firstNumber = getRandomIntFromRange(1, 20);
    const secondNumber = getRandomIntFromRange(1, 10);
    const operator = getRandomItem(operators);
    const expression = `${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = String(getCorrectAnswer(firstNumber, secondNumber, operator));

    return { correctAnswer, question: expression };
  });
};
