#!/usr/bin/env node
import { getUserName, greetUser } from '../src/cli.js';
import gcdQuiz from '../src/games/gcd.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
greetUser(userName);

console.log('Find the greatest common divisor of given numbers.');

gcdQuiz(userName);

console.log(`Congratulations, ${userName}!`);
