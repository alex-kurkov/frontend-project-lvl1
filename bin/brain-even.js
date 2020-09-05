#!/usr/bin/env node
import {
  getUserName,
  greetUser,
} from '../src/cli.js';
import evenQuiz from '../src/games/even.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenQuiz(userName);
console.log(`Congratulations, ${userName}!`);
