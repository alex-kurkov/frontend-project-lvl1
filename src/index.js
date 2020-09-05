export const getRandomInteger = (upperLimit = 100) => Math.ceil(Math.random() * upperLimit);

export const consoleMessage = (isRightAnswer, correctAnswer, userAnswer, userName) => {
  switch (isRightAnswer) {
    case true:
      console.log('Correct!');
      break;
    default:
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  }
};

export const getRandomOperation = () => {
  switch (getRandomInteger(3)) {
    case 1:
      return '+';
    case 2:
      return '-';
    default:
      return '*';
  }
};
