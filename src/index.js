import readlineSync from 'readline-sync';

export default (taskDescription, genRoundData) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(taskDescription);

  for (let i = 1; i <= 3; i += 1) {
    const { correctAnswer, question } = genRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isRightAnswer = correctAnswer === userAnswer;
    if (isRightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${user}!`);
      return new Error('Invalid answer. Game over');
    }
  }
  return console.log(`Congratulations, ${user}!`);
};
