import readlineSync from 'readline-sync';

export default ({ quizTask, gameLogicHandler, userAnswerIsNumber }) => {
  // intro greeting + get user name + console quiz task
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(quizTask);

  // main game engine
  let counter = 0;
  while (counter < 3) {
    const { correctAnswer, question } = gameLogicHandler();

    // console quiz question
    console.log(question);

    // get and modify user answer
    const userAnswer = readlineSync.question('Your answer: ');
    const userAnswerModified = userAnswerIsNumber // to cover NaN case for consoleMessage()...
      ? Number(userAnswer)
      : userAnswer;
    // define Correctness
    const isRightAnswer = correctAnswer === userAnswerModified;

    // console Result
    switch (isRightAnswer) {
      case true:
        console.log('Correct!');
        break;
      default:
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    }
    // handle quiz success counter
    counter = isRightAnswer
      ? counter += 1
      : 0;
  }
  // congratulate on completion
  console.log(`Congratulations, ${user}!`);
};
