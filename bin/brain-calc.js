import { runGame } from "../src/index.js";
import { gameDescriptionCalc, getRoundDataCalculate } from "../src/games/calc.js";

export const brainCalc = runGame(gameDescriptionCalc, getRoundDataCalculate);