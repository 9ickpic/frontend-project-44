import { runGame } from "../src/index.js";
import { gameDescriptionGCD, getRoundDataGCD } from "../src/games/gcd.js";

export const brainGCD = runGame(gameDescriptionGCD, getRoundDataGCD);