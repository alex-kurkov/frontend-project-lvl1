import playGame from '../index.js';
import getRandomIntFromRange from '../utils/getRandomIntFromRange.js';

const makeProgression = (startNumber, step, length) => {
  const arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(startNumber + (step * i));
  }
  return arr;
};

export default () => {
  const taskDescription = 'What number is missing in the progression?';
  const progressionParams = {
    startNumberFrom: 0,
    startNumberTo: 20,
    stepNumberFrom: 2,
    stepNumberTo: 9,
    progressionLength: 10,
  };
  const generateRoundData = () => {
    const progression = makeProgression(
      getRandomIntFromRange(progressionParams.startNumberFrom, progressionParams.startNumberTo),
      getRandomIntFromRange(progressionParams.stepNumberFrom, progressionParams.stepNumberTo),
      progressionParams.progressionLength,
    );
    const idxHidden = getRandomIntFromRange(0, progressionParams.progressionLength - 1);
    const correctAnswer = String(progression.splice(idxHidden, 1, '..'));
    return { correctAnswer, question: progression.join(' ') };
  };

  playGame(taskDescription, generateRoundData);
};
