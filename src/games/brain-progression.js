import engine, { defaultRoundsCount } from '../index.js';
import getRandomInt from '../utils.js';

const generateArithmProgression = (initialNumber, stepNumber, lengthNumber) => {
  const arithmProgrArray = [initialNumber];
  let temp = initialNumber;

  for (let i = 0; i < lengthNumber - 1; i += 1) {
    temp += stepNumber;
    arithmProgrArray.push(temp);
  }

  return arithmProgrArray;
};

const arithmProgression = () => {
  const description = 'What number is missing in the progression?';
  const array = [];
  const lengthNumber = 10;

  for (let i = 0; i < defaultRoundsCount; i += 1) {
    const initialNumber = getRandomInt(10) + 1;
    const stepNumber = getRandomInt(5) + 2;
    const randomIndexNumber = getRandomInt(10);

    const arithmProgrArray = generateArithmProgression(initialNumber, stepNumber, lengthNumber);

    const expectedAnswer = arithmProgrArray[randomIndexNumber].toString();
    arithmProgrArray[randomIndexNumber] = '..';

    const question = `Question: ${arithmProgrArray.join(' ')}`;

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default arithmProgression;
