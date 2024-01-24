import engine from '../index.js';
import { getRandomInt } from '../utils.js'

const arithmProgression = () => {
  const maxRoundNumber = 3;
  const description = 'What number is missing in the progression?';
  const array = [];
  const lengthArithmNumber = 10;

  for (let i = 0; i < maxRoundNumber; i += 1) {
    const initialArithmNumber = getRandomInt(10) + 1;
    const stepArithmNumber = getRandomInt(5) + 2;
    const randomIndexNumber = getRandomInt(10);
    const arithmProgrArray = [initialArithmNumber];
    const arithmProgrArrayForPrint = [];
    
    let temp = initialArithmNumber;

    for (let j = 0; j < lengthArithmNumber - 1; j += 1) {
      temp += stepArithmNumber;
      arithmProgrArray.push(temp);
    }

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
