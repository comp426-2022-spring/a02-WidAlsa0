import { coinFlips, countFlips } from "./modules/coin.mjs";

const arg = process.argv.slice(2)
var number;

number = arg[0].slice[9]
if (number == null) {
    console.log(array)
    console.log(countFlips(1))
} else {
    let array = coinFlips(number)
    console.log(array)
    console.log(countFlips(number))
}

