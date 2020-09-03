#!/usr/bin/env node
import { getUserName, greetUser } from '../src/cli.js';

const userName = getUserName();
greetUser(userName);
