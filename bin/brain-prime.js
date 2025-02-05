import { runGame } from "../src";
import { gameDescriptionPrime, getRoundDataPrime } from "../src/games/prime";

export const brainPrime = runGame(gameDescriptionPrime, getRoundDataPrime);