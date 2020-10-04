import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;
const generateRoundData = () => {
  const randomNumber = getRandomIntFromRange(1, 120);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  return { correctAnswer, question: randomNumber };
};

export default () => playGame(taskDescription, generateRoundData);
