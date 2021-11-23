let counter = 0;

export const getFreshId = () => {
  counter++;
  let fourDigitNumber = ("0000" + counter).slice(-4);
  const id = "AA" + fourDigitNumber;
  return id; //return AA0001
};
