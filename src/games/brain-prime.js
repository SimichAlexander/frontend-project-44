const isPrimeNumber = () => {
  const RandomNumber = Math.floor(Math.random() * 50);
  let flag = 0;
  let expectedAnswer;

  for (let i = 1; i <= RandomNumber; i += 1) {
    if (RandomNumber % i === 0) {
      flag += 1;
    }
  }

  if (flag > 2) {
    expectedAnswer = 'no';
  } else {
    expectedAnswer = 'yes';
  }

  console.log(`Question: ${RandomNumber}`);

  return expectedAnswer;
};

export default isPrimeNumber;
