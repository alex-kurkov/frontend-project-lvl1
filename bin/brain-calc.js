#!/usr/bin/env node
import { getUserName, greetUser } from '../src/cli.js';
import calcQuiz from '../src/games/calc.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);

console.log('What is the result of the expression?');

calcQuiz(userName);

console.log(`Congratulations, ${userName}!`);
