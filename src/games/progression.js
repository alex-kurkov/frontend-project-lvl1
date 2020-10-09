import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const taskDescription = 'What number is missing in the progression?';
const makeProgression = (first, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(first + (step * i));
  }
  return arr;
};
const progressionLength = 10;

const generateRoundData = () => {
  const first = getRandomIntFromRange(0, 10);
  const step = getRandomIntFromRange(2, 9);
  const progression = makeProgression(
    first,
    step,
    progressionLength,
  );
  const hiddenIndex = getRandomIntFromRange(0, progressionLength - 1);
  const correctAnswer = String(progression.splice(hiddenIndex, 1, '..'));
  const question = progression.join(' ');
  return { correctAnswer, question };
};

export default () => playGame(taskDescription, generateRoundData);
