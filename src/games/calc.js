import { generationNumber } from '../index.js';

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

export const gameDescriptionCalc = 'What is the result of the expression?';

export function getRoundDataCalculate() {
  const num1 = generationNumber(1, 100);
  const num2 = generationNumber(1, 100);
  const operation = Object.keys(operations)[generationNumber(0, 2)];
  const correctAnswer = operations[operation](num1, num2);
  const question = `${num1} ${operation} ${num2}`;
  return [question, correctAnswer];
}
