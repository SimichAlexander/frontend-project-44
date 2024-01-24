import readlineSync from 'readline-sync';

const engine = (description, [[quest1, answ1], [quest2, answ2], [quest3, answ3]]) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  const arr = [[quest1, answ1], [quest2, answ2], [quest3, answ3]];
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i][0]);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === arr[i][1]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${arr[i][1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }

  console.log(`Congratulations, ${name}!`);

  return 0;
};

export default engine;
