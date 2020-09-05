import readlineSync from 'readline-sync';
import {
  getRandomInteger,
  consoleMessage,
} from '../index.js';

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

export default (user) => {
  let counter = 0;
  while (counter < 3) {
    const progression = makeProgression();
    const hiddenIndex = getRandomInteger(progressionLength) - 1;
    const stringToShow = makeQuestionString(progression, hiddenIndex);
    const correctAnswer = progression[hiddenIndex];

    console.log(`Question: ${stringToShow}`);

    const userAnswer = Number(readlineSync.question('Your answer: '));
    const isRightAnswer = correctAnswer === userAnswer;
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
};