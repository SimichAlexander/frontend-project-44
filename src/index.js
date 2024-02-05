import readlineSync from 'readline-sync';

export const defaultRoundsCount = 3;

const engine = (description, gameData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  for (let i = 0; i < gameData.length; i += 1) {
    console.log(gameData[i][0]);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameData[i][1]) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData[i][1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default engine;
