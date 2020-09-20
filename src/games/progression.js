import startGame from '../index.js';
import getRandomIntegerFromRange from '../utils/getRandomIntegerFromRange.js';

const makeProgression = ({ initNumber, stepNum, progressionLength }) => {
  const arr = [initNumber];
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(initNumber + (stepNum * i));
  }
  return arr;
};
const makeQuestionString = (progression, hiddenStr) => progression
  .join(' ')
  .replace(hiddenStr, '..');

export default () => {
  startGame({
    quizTask: 'What number is missing in the progression?',
    gameLogicHandler: () => {
      const progressionLength = 10; // removed from global scope
      const progression = makeProgression({
        initNumber: getRandomIntegerFromRange(0, 20),
        stepNum: getRandomIntegerFromRange(2, 9),
        progressionLength,
      });
      const indexToHide = getRandomIntegerFromRange(0, progressionLength - 1);
      const hiddenElement = String(progression[indexToHide]);
      const stringToShow = makeQuestionString(progression, hiddenElement);
      const correctAnswer = hiddenElement;
      return { correctAnswer, question: stringToShow };
    },
  });
};
