import { generationNumber } from '../index.js';

export const gameDescriptionProgression =
  'What number is missing in the progression?';

export function getRoundDataProgression() {
  const length = generationNumber(5, 10);
  const step = generationNumber(2, 10);
  const progression = [];

  const firstNumber = generationNumber(1, 100);
  for (let i = 0; i < length; i++) {
    progression.push(firstNumber + i * step);
  }

  const indexToHide = generationNumber(0, length - 1);
  const hiddenValue = progression[indexToHide];
  progression[indexToHide] = '..';

  const question = progression.join(' ');
  return [question, hiddenValue];
}
