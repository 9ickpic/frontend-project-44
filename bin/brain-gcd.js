#!/usr/bin/env node

import { runGame } from "../src/index.js";
import { gameDescriptionGCD, getRoundDataGCD } from "../src/games/gcd.js";

runGame(gameDescriptionGCD, getRoundDataGCD);