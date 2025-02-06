#!/usr/bin/env node

import { runGame } from '../src/index.js';
import {
  gameDescriptionProgression,
  getRoundDataProgression,
} from '../src/games/progression.js';

runGame(gameDescriptionProgression, getRoundDataProgression);
