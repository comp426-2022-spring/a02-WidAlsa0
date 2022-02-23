import { coinFlips, countFlips } from "./modules/coin.mjs";

import minimist from 'minimist'
const arg = minimist(process.argv.slice(2))
const value = argument.number || 1
let numberOfFlips = coinFlips(value)

console.log(numberOfFlips)
console.log(countFlips(numberOfFlips))