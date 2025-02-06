#!/usr/bin/env node

import { runGame } from "../src/index.js";
import { gameDescriptionPrime, getRoundDataPrime } from "../src/games/prime.js";

runGame(gameDescriptionPrime, getRoundDataPrime);