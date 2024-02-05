import engine, { defaultRoundsCount } from '../index.js';
import getRandomInt from '../utils.js';

const getGreatestCommonDivisor = (a, b) => ((!b) ? a : getGreatestCommonDivisor(b, a % b));

const greatestCommonDivisor = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const array = [];

  for (let i = 0; i < defaultRoundsCount; i += 1) {
    const firstNumber = getRandomInt(50) + 1;
    const secondNumber = getRandomInt(50) + 1;

    const question = `Question: ${firstNumber} ${secondNumber}`;
    const expectedAnswer = getGreatestCommonDivisor(firstNumber, secondNumber).toString();

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default greatestCommonDivisor;
