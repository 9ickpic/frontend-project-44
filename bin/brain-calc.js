#!/usr/bin/env node

import { runGame } from '../src/index.js';
import {
  gameDescriptionCalc,
  getRoundDataCalculate,
} from '../src/games/calc.js';

runGame(gameDescriptionCalc, getRoundDataCalculate);
