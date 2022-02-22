import { coinFlips, countFlips } from "./modules/coin.mjs";

const arg = process.argv.slice(2)
var number;

number = arg[0].split("--number=")[1]
if (number == null) {
    console.log(array)
    console.log(countFlips(1))
} else {
    let array = coinFlips(number)
    console.log(array)
    console.log(countFlips(number))
}

