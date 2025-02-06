import { generationNumber } from '../index.js';

export const gameDescriptionGCD =
  'Find the greatest common divisor of given numbers.';

export const getRoundDataGCD = () => {
  const num1 = generationNumber(1, 100);
  const num2 = generationNumber(1, 100);
  const correctAnswer = gcd(num1, num2);
  const question = `${num1} ${num2}`;

  return [question, correctAnswer];
};

function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }

  return a;
}
