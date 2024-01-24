import engine from '../index.js';
import getRandomInt from '../utils.js';

const findMax = (arr) => {
  let max = arr[0];
  for (let m = 1; m < arr.length; m += 1) {
    if (arr[m] > max) {
      max = arr[m];
    }
  }

  return max;
};

const greatestCommonDivisor = () => {
  const maxRoundNumber = 3;
  const description = 'Find the greatest common divisor of given numbers.';
  const array = [];

  for (let i = 0; i < maxRoundNumber; i += 1) {
    const firstRandomNumber = getRandomInt(50) + 1;
    const secondRandomNumber = getRandomInt(50) + 1;
    const firstNumberDivisors = [];
    const secondNumberDivisors = [];

    for (let j = 1; j <= firstRandomNumber; j += 1) {
      if (firstRandomNumber % j === 0) {
        firstNumberDivisors.push(j);
      }
    }

    for (let k = 1; k <= secondRandomNumber; k += 1) {
      if (secondRandomNumber % k === 0) {
        secondNumberDivisors.push(k);
      }
    }

    const question = `Question: ${firstRandomNumber} ${secondRandomNumber}`;

    const intersection = firstNumberDivisors.filter((x) => secondNumberDivisors.includes(x));
    const expectedAnswer = findMax(intersection).toString();
    // const expectedAnswer = Math.max.apply(null, intersection).toString();

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default greatestCommonDivisor;
