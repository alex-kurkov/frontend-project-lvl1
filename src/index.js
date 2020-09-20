import readlineSync from 'readline-sync';

export default ({ quizTask, gameLogicHandler }) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(quizTask);

  let counter = 0;
  while (counter < 3) {
    const { correctAnswer, question } = gameLogicHandler();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isRightAnswer = correctAnswer === userAnswer;
    if (isRightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${user}!`);
    }
    counter = isRightAnswer ? counter += 1 : 0;
  }

  console.log(`Congratulations, ${user}!`);
};
