import readlineSync from 'readline-sync';
import { greeting } from './cli.js';

export const generationNumber = (min = 0, max = 100) => {
  const number = Math.floor(Math.random() * (max - min + 1)) + min;

  return number;
};

export const checkAnswer = (name, userAnswer, correctAnswer) => {
  if (userAnswer === correctAnswer) {
    console.log(`Correct!`);
    return true;
  } else {
    console.log(
      `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}`
    );
    return false;
  }
};

export function runGame(gameDescription, getRoundData) {
  console.log(gameDescription);

  const roundsCount = 3;
  const greetName = greeting();

  for (let round = 1; round <= roundsCount; round++) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question(`Your answer: `);

    if (userAnswer === correctAnswer.toString()) {
      console.log(`Correct!`);
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`
      );
      console.log(`Let's try again, ${greetName}!`);
      break;
    }

    if (round === 3) {
      console.log(`Congratulations, ${greetName}!`);
    }
  }
}
