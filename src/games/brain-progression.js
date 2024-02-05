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
    const arithmProgrArrayForPrint = [];

    const arithmProgrArray = generateArithmProgression(initialNumber, stepNumber, lengthNumber);

    for (let k = 0; k < arithmProgrArray.length; k += 1) {
      if (k === randomIndexNumber) {
        arithmProgrArrayForPrint.push('..');
      } else {
        arithmProgrArrayForPrint.push(arithmProgrArray[k].toString());
      }
    }

    const question = `Question: ${arithmProgrArrayForPrint.join(' ')}`;
    const expectedAnswer = arithmProgrArray[randomIndexNumber].toString();

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default arithmProgression;
