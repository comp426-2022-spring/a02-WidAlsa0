import { flipACoin } from "./modules/coin.mjs";

import minimist from 'minimist'

const arg = minimist(process.argv.slice(2))

if (arg == 'heads' || arg == 'tails') {
    console.log(flipACoin(arg.call))
} else {
    console.log("Error: no input.")
    console.log("Usage: node guess-flip --call=[heads|tails]")
}