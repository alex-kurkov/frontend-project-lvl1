import readlineSync from 'readline-sync';

const greetAndGetUserName = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const congratulate = (user) => console.log(`Congratulations, ${user}!`);

const consoleMessage = (isRightAnswer, correctAnswer, userAnswer, userName) => {
  switch (isRightAnswer) {
    case true:
      console.log('Correct!');
      break;
    default:
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  }
};

export default ({ quizTask, gameLogicHandler, userAnswerIsNumber }) => {
  const user = greetAndGetUserName();

  console.log(quizTask);

  let counter = 0;
  while (counter < 3) {
    const { correctAnswer, question } = gameLogicHandler();

    console.log(question);

    const userAnswer = userAnswerIsNumber
      ? Number(getAnswer())
      : getAnswer();

    const isRightAnswer = correctAnswer === userAnswer;
    consoleMessage(isRightAnswer, correctAnswer, userAnswer, user);
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
  congratulate(user);
};
