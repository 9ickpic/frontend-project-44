#!/usr/bin/env node

import { brainCalc } from "./brain-calc.js";
import { brainEven } from "./brain-even.js";
import { brainGCD } from "./brain-gcd.js";
import { brainPrime } from "./brain-prime.js";
import { brainProgression } from "./brain-progression.js";

console.log(`Welcome to the Brain Games!`);

brainEven();
brainCalc();
brainProgression();
brainGCD();
brainPrime();