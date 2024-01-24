import readlineSync from 'readline-sync';

const engine = (description, [[quest1, answ1], [quest2, answ2], [quest3, answ3]]) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(description);

  let arr = [[quest1, answ1], [quest2, answ2], [quest3, answ3]];
  for (const item of arr) {
    console.log(item[0]);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === item[1]) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${item[1]}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return 0;
};

export default engine;
