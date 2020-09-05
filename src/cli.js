import readlineSync from 'readline-sync';

export const greetAndGetUserName = () => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);
  return user;
};

export const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const congratulate = (user) => console.log(`Congratulations, ${user}!`);
