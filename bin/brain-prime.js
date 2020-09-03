#!/usr/bin/env node
import { getUserName, greetUser } from '../src/cli.js';
import primeQuiz from '../games/primeQuiz.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);

console.log('Answer "yes" if given number is prime. Otherwise answer "no"');

primeQuiz(userName);

console.log(`Congratulations, ${userName}!`);