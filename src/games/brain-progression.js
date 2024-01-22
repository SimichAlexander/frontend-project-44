const arithmProgression = () => {
  const lengthArithmNumber = 10;
  const initialArithmNumber = Math.floor(Math.random() * 10) + 1;
  const stepArithmNumber = Math.floor(Math.random() * 5) + 2;
  const randomPlaceNumber = Math.floor(Math.random() * 10);
  const arithmProgrArray = [initialArithmNumber];
  const arithmProgrArrayForPrint = [];
  let temp = initialArithmNumber;

  for (let i = 0; i < lengthArithmNumber - 1; i += 1) {
    temp += stepArithmNumber;
    arithmProgrArray.push(temp);
  }

  for (let j = 0; j < arithmProgrArray.length; j += 1) {
    if (j === randomPlaceNumber) {
      arithmProgrArrayForPrint.push('..');
    } else {
      arithmProgrArrayForPrint.push(arithmProgrArray[j].toString());
    }
  }

  console.log(`Question: ${arithmProgrArrayForPrint.join(' ')}`);
  const expectedAnswer = arithmProgrArray[randomPlaceNumber].toString();
  return expectedAnswer;
};

export default arithmProgression;
