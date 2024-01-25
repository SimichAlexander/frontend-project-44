import readlineSync from 'readline-sync';

export const defaultRoundsCount = 3;

const engine = (description, arr) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i][0]);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== arr[i][1]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${arr[i][1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default engine;

// export {
//   engine as default,
//   defaultRoundsCount,
// };
