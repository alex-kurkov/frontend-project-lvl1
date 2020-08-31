#!/usr/bin/env node
import User from './User.js';

const currentUser = new User();

console.log('Welcome to the Brain Games!');
currentUser.getUserName();
currentUser.greetUser();
