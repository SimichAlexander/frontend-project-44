const calculator = () => {
  const operation = ['+', '-', '*'];
  const firstRandomNumber = Math.floor(Math.random() * 20);
  const secondRandomNumber = Math.floor(Math.random() * 20);
  const randomOperaton = Math.floor(Math.random() * operation.length);
  let expectedAnswer;

  if (operation[randomOperaton] === '+') {
    expectedAnswer = (firstRandomNumber + secondRandomNumber).toString();
  } else if (operation[randomOperaton] === '-') {
    expectedAnswer = (firstRandomNumber - secondRandomNumber).toString();
  } else if (operation[randomOperaton] === '*') {
    expectedAnswer = (firstRandomNumber * secondRandomNumber).toString();
  } else {
    console.log('Error');
    return 0;
  }
  console.log(`Question: ${firstRandomNumber} ${operation[randomOperaton]} ${secondRandomNumber}`);

  return expectedAnswer;
};

export default calculator;
