#!/usr/bin/env node
import { getUserName, greetUser } from '../src/cli.js';
import gcdQuiz from '../games/gcdQuiz.js';

const userName = getUserName();
greetUser(userName);

console.log('Find the greatest common divisor of given numbers.');

gcdQuiz(userName);

console.log(`Congratulations, ${userName}!`);
