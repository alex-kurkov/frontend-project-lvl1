import readlineSync from 'readline-sync';

export default class User {
  getUserName() {
    this.userName = readlineSync.question('May I have your name?');
  }

  greetUser() {
    console.log(`Hello, ${this.userName}!`);
  }
}
