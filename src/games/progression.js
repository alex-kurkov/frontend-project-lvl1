import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const taskDescription = 'What number is missing in the progression?';
const makeProgression = (firstElement, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(firstElement + (step * i));
  }
  return arr;
};
const progressionLength = 10;
const firstElementFrom = 0;
const firstElementTo = 20;
const stepNumberFrom = 2;
const stepNumberTo = 9;
const progression = makeProgression(
  getRandomIntFromRange(firstElementFrom, firstElementTo),
  getRandomIntFromRange(stepNumberFrom, stepNumberTo),
  progressionLength,
);

const generateRoundData = () => {
  const progressionInner = [...progression];
  const idxHidden = getRandomIntFromRange(0, progressionLength - 1);
  const correctAnswer = String(progressionInner.splice(idxHidden, 1, '..'));
  return { correctAnswer, question: progressionInner.join(' ') };
};

export default () => playGame(taskDescription, generateRoundData);
