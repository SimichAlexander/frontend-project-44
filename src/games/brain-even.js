const isEvenNumber = () => {
  const randomNumber = Math.floor(Math.random() * 20);
  let expectedAnswer;

  if (randomNumber % 2 === 0) {
    expectedAnswer = 'yes';
  } else {
    expectedAnswer = 'no';
  }
  console.log(`Question: ${randomNumber}`);

  return expectedAnswer;
};

export default isEvenNumber;
