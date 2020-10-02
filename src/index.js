import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (taskDescription, generateRoundData) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  console.log(taskDescription);

  for (let i = 1; i <= roundsCount; i += 1) {
    const { correctAnswer, question } = generateRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratulations, ${user}!`);
};
