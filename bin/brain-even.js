#!/usr/bin/env node

import readlineSync from 'readline-sync';

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const isEvenNumber = () => {
    let expectedAnswer;
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    
    let correctAnswerCounter = 0;
    while (correctAnswerCounter < 3) {    
        let randomNumber = getRandomInt(20);
        if (randomNumber % 2 === 0) {
            expectedAnswer = 'yes';
        } else {
            expectedAnswer = 'no';
        }
        console.log(`Question: ${randomNumber}`);
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

isEvenNumber();