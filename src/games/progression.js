import startGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const makeProgression = (initNumber, stepNum, progressionLength) => {
  const arr = [initNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(initNumber + (stepNum * i));
  }
  return arr;
};

export default () => {
  startGame('What number is missing in the progression?', () => {
    const progressionLength = 10;
    const progression = makeProgression(
      getRandomIntFromRange(0, 20),
      getRandomIntFromRange(2, 9),
      progressionLength,
    );
    const indexToHide = getRandomIntFromRange(0, progressionLength - 1);
    const correctAnswer = String(progression.splice(indexToHide, 1, '..'));
    return { correctAnswer, question: progression.join(' ') };
  });
};
