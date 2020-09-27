import startGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const makeProgression = (firstElem, step, length) => {
  const arr = [firstElem];
  for (let i = 1; i < length; i += 1) {
    arr.push(firstElem + (step * i));
  }
  return arr;
};
const PROGRESSION_LENGTH = 10;

export default () => {
  startGame('What number is missing in the progression?', () => {
    const progression = makeProgression(
      getRandomIntFromRange(0, 20),
      getRandomIntFromRange(2, 9),
      PROGRESSION_LENGTH,
    );
    const idxHidden = getRandomIntFromRange(0, PROGRESSION_LENGTH - 1);
    const correctAnswer = String(progression.splice(idxHidden, 1, '..'));
    return { correctAnswer, question: progression.join(' ') };
  });
};
