import engine, { defaultRoundsCount } from '../index.js';
import getRandomInt from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const isEvenNumber = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const array = [];
  let expectedAnswer;

  for (let i = 0; i < defaultRoundsCount; i += 1) {
    const randomNumber = getRandomInt(20);

    const question = `Question: ${randomNumber}`;

    expectedAnswer = isEven(randomNumber) ? 'yes' : 'no';

    array.push([question, expectedAnswer]);
  }

  engine(description, array);
};

export default isEvenNumber;
