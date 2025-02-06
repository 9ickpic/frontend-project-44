import { generationNumber } from '../index.js';

export const gameDescriptionGCD = 'Find the greatest common divisor of given numbers.';

function gcd(a, b) {
  let localA = a;
  let localB = b;
  while (localB !== 0) {
    const temp = localB;
    localB = localA % localB;
    localA = temp;
  }
  return localA;
}

export const getRoundDataGCD = () => {
  const num1 = generationNumber(1, 100);
  const num2 = generationNumber(1, 100);
  const correctAnswer = gcd(num1, num2);
  const question = `${num1} ${num2}`;

  return [question, correctAnswer];
};
