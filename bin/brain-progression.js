import { runGame } from "../src";
import { gameDescriptionProgression, getRoundDataProgression } from "../src/games/progression";

export const brainProgression = runGame(gameDescriptionProgression, getRoundDataProgression);