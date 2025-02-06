import { generationNumber } from '../index.js';

export const gameDescriptionEven = 'Answer "yes" if the number is even, otherwise answer "no".';

export function getRoundDataEven() {
  const number = generationNumber(1, 100);

  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
  const question = `${number}`;
  return [question, correctAnswer];
}
