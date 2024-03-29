import engine, { defaultRoundsCount } from '../index.js';
import getRandomInt from '../utils.js';

const calculator = () => {
  const description = 'What is the result of the expression?';
  const array = [];
  let expectedAnswer;

  const operation = ['+', '-', '*'];

  for (let i = 0; i < defaultRoundsCount; i += 1) {
    const firstRandomNumber = getRandomInt(20);
    const secondRandomNumber = getRandomInt(20);
    const randomOperaton = getRandomInt(operation.length);

    const question = `Question: ${firstRandomNumber} ${operation[randomOperaton]} ${secondRandomNumber}`;

    switch (operation[randomOperaton]) {
      case '+':
        expectedAnswer = (firstRandomNumber + secondRandomNumber).toString();
        break;
      case '-':
        expectedAnswer = (firstRandomNumber - secondRandomNumber).toString();
        break;
      case '*':
        expectedAnswer = (firstRandomNumber * secondRandomNumber).toString();
        break;
      default:
        throw new Error('Error!');
    }

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default calculator;
