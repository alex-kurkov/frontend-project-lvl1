import readlineSync from 'readline-sync';

export const getUserName = () => {
  const user = readlineSync.question('May I have your name? ');
  return user;
};

export const greetUser = (user) => console.log(`Hello, ${user}!`);
