import startGame from '../index.js';
import getRandomInteger from '../utils/getRandomInteger.js';

const progressionLength = 10;
const makeProgression = () => {
  const initNumber = getRandomInteger(15);
  const arr = [initNumber];
  const stepNum = getRandomInteger(9) + 1;
  for (let i = 1; i < progressionLength; i += 1) {
    arr.push(initNumber + (stepNum * i));
  }
  return arr;
};
const makeQuestionString = (progression, hiddenIndex) => {
  const head = progression
    .slice(0, hiddenIndex)
    .join(' ');
  const tail = progression
    .slice(hiddenIndex + 1)
    .join(' ');
  return `${head} .. ${tail}`;
};

export default () => {
  startGame({
    quizTask: 'What number is missing in the progression?',
    userAnswerIsNumber: true,
    gameLogicHandler: () => {
      const progression = makeProgression();
      const hiddenIndex = getRandomInteger(progressionLength) - 1;
      const stringToShow = makeQuestionString(progression, hiddenIndex);
      const correctAnswer = progression[hiddenIndex];
      return { correctAnswer, question: `Question: ${stringToShow}` };
    },
  });
};
