import engine from '../index.js';
import getRandomInt from '../utils.js';

const calculator = () => {
  const maxRoundNumber = 3;
  const description = 'What is the result of the expression?';
  const array = [];
  let expectedAnswer;

  const operation = ['+', '-', '*'];

  for (let i = 0; i < maxRoundNumber; i += 1) {
    const firstRandomNumber = getRandomInt(20);
    const secondRandomNumber = getRandomInt(20);
    const randomOperaton = getRandomInt(operation.length);

    const question = `Question: ${firstRandomNumber} ${operation[randomOperaton]} ${secondRandomNumber}`;

    if (operation[randomOperaton] === '+') {
      expectedAnswer = (firstRandomNumber + secondRandomNumber).toString();
    } else if (operation[randomOperaton] === '-') {
      expectedAnswer = (firstRandomNumber - secondRandomNumber).toString();
    } else if (operation[randomOperaton] === '*') {
      expectedAnswer = (firstRandomNumber * secondRandomNumber).toString();
    }
    // else {
    //   throw new Error('Error!');
    // }

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default calculator;
