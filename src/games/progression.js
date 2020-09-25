import startGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const makeProgression = (nStart, nStep, nLength) => {
  const arr = [nStart];
  for (let i = 1; i < nLength; i += 1) {
    arr.push(nStart + (nStep * i));
  }
  return arr;
};
const progressionLength = 10;

export default () => {
  startGame('What number is missing in the progression?', () => {
    const progression = makeProgression(
      getRandomIntFromRange(0, 20),
      getRandomIntFromRange(2, 9),
      progressionLength,
    );
    const idxHidden = getRandomIntFromRange(0, progressionLength - 1);
    const correctAnswer = String(progression.splice(idxHidden, 1, '..'));
    return { correctAnswer, question: progression.join(' ') };
  });
};
