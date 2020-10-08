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

const generateRoundData = () => {
  // перенес на этот уровень, чтобы генерировались разные прогрессии для 3
  // последовательных вопросов
  const first = getRandomIntFromRange(0, 10);
  const step = getRandomIntFromRange(2, 9);
  const progression = makeProgression(
    first,
    step,
    progressionLength,
  );
  const idxHidden = getRandomIntFromRange(0, progressionLength - 1);
  const correctAnswer = String(progression.splice(idxHidden, 1, '..'));
  const question = progression.join(' ');
  return { correctAnswer, question };
};

export default () => playGame(taskDescription, generateRoundData);
