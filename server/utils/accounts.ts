const BIN = '5';
const LENGTH = 16;

export const generateCardNumber = () => {
  const randomNumberLength = LENGTH - (BIN.length + 1);

  let cardNumber = Array.from(Array(randomNumberLength)).reduce((acc, _) => {
    const digit = Math.floor(Math.random() * 9 + 0);
    return acc + digit.toString();
  }, BIN);

  const checkDigit = getCheckDigit(cardNumber);

  cardNumber += String(checkDigit);

  return cardNumber;
};

function getCheckDigit(number: string) {
  let sum = 0;

  for (let i = 0; i < number.length; i++) {
    let digit = parseInt(number.substring(i, i + 1));

    if (i % 2 === 0) {
      digit = digit * 2;
      if (digit > 9) {
        digit = digit / 10 + (digit % 10);
      }
    }
    sum += digit;
  }

  const module = parseInt(sum.toString()) % 10;

  return module === 0 ? 0 : 10 - module;
}
