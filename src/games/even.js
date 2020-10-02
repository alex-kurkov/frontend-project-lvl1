import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const isEven = (num) => num % 2 === 0;

export default () => {
  const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const generateRoundData = () => {
    const randomNumber = getRandomIntFromRange(1, 120);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    return { correctAnswer, question: randomNumber };
  };
  playGame(taskDescription, generateRoundData);
};
