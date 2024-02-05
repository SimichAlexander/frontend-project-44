import engine, { defaultRoundsCount } from '../index.js';
import getRandomInt from '../utils.js';

const isPrime = (number) => {
  let flag = 0;
  for (let j = 1; j <= number; j += 1) {
    if (number % j === 0) {
      flag += 1;
    }
  }
  return (flag < 3);
};

const isPrimeNumber = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const array = [];
  let expectedAnswer;

  for (let i = 0; i < defaultRoundsCount; i += 1) {
    const randomNumber = getRandomInt(50);
    expectedAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    const question = `Question: ${randomNumber}`;

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default isPrimeNumber;
