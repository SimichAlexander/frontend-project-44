const greatestCommonDivisor = () => {
  const firstRandomNumber = Math.floor(Math.random() * 50);
  const secondRandomNumber = Math.floor(Math.random() * 50);
  const firstNumberDivisors = [];
  const secondNumberDivisors = [];

  for (let i = 1; i <= firstRandomNumber; i += 1) {
    if (firstRandomNumber % i === 0) {
      firstNumberDivisors.push(i);
    }
  }

  for (let i = 1; i <= secondRandomNumber; i += 1) {
    if (secondRandomNumber % i === 0) {
      secondNumberDivisors.push(i);
    }
  }

  const intersection = firstNumberDivisors.filter((x) => secondNumberDivisors.includes(x));
  const expectedAnswer = Math.max.apply(null, intersection).toString();

  console.log(`Question: ${firstRandomNumber} ${secondRandomNumber}`);

  return expectedAnswer;
};

export default greatestCommonDivisor;
