#!/usr/bin/env node
import { getUserName, greetUser } from '../src/cli.js';
import progressionQuiz from '../src/games/progression.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);

console.log('What number is missing in the progression?');

progressionQuiz(userName);

console.log(`Congratulations, ${userName}!`);
