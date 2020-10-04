import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const taskDescription = 'What is the result of the expression?';
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
const firstNumberFrom = 1;
const firstNumberTo = 20;
const secondNumberFrom = 1;
const secondNumberTo = 10;

const generateRoundData = () => {
  const firstNumber = getRandomIntFromRange(firstNumberFrom, firstNumberTo);
  const secondNumber = getRandomIntFromRange(secondNumberFrom, secondNumberTo);
  const operator = getRandomItem(operators);
  const expression = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(getCorrectAnswer(firstNumber, secondNumber, operator));
  return { correctAnswer, question: expression };
};

export default () => playGame(taskDescription, generateRoundData);
