import readlineSync from 'readline-sync';
import isEvenNumber from './games/brain-even.js';
import calculator from './games/brain-calc.js';
import greatestCommonDivisor from './games/brain-gcd.js';
import arithmProgression from './games/brain-progression.js';
import isPrimeNumber from './games/brain-prime.js';

// export const getRandomInt = (max) => Math.floor(Math.random() * max);

const engine = (brainGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const maxRoundNumber = 3;
  let expectedAnswer;
  let correctAnswerCounter = 0;
  if (brainGame === 'brain-calc') {
    console.log('What is the result of the expression?');
  } else if (brainGame === 'brain-even') {
    console.log('Answer \'yes\' if the number is even, otherwise answer \'no\'.');
  } else if (brainGame === 'brain-gcd') {
    console.log('Find the greatest common divisor of given numbers.');
  } else if (brainGame === 'brain-progression') {
    console.log('What number is missing in the progression?');
  } else if (brainGame === 'brain-prime') {
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  }

  while (correctAnswerCounter < maxRoundNumber) {
    if (brainGame === 'brain-calc') {
      expectedAnswer = calculator();
    } else if (brainGame === 'brain-even') {
      expectedAnswer = isEvenNumber();
    } else if (brainGame === 'brain-gcd') {
      expectedAnswer = greatestCommonDivisor();
    } else if (brainGame === 'brain-progression') {
      expectedAnswer = arithmProgression();
    } else if (brainGame === 'brain-prime') {
      expectedAnswer = isPrimeNumber();
    } else {
      console.log('Error');
      return 0;
    }

    const answer = readlineSync.question('Your answer: ');
    if (answer === expectedAnswer) {
      console.log('Correct!');
      correctAnswerCounter += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default engine;
