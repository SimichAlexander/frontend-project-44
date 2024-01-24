import engine from '../index.js';
import { getRandomInt } from '../utils.js'

const isPrime = (number) => {
  let flag = 0;
  for (let j = 1; j <= number; j += 1) {
    if (number % j === 0) {
      flag += 1;
    }
  }

  if (flag > 2) {
    return 'no';
  } else {
    return 'yes';
  }
}

const isPrimeNumber = () => {
  const maxRoundNumber = 3;
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const array = [];
  let expectedAnswer;

  for (let i = 0; i < maxRoundNumber; i += 1) {
    const RandomNumber = getRandomInt(50);
    expectedAnswer = isPrime(RandomNumber);

    const question = `Question: ${RandomNumber}`;

    array.push([question, expectedAnswer]);
  }
  
  engine(description, array);
};

export default isPrimeNumber;
