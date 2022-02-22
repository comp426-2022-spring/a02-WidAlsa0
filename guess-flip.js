import { flipACoin } from "./modules/coin.mjs";

const arg = process.argv.slice(2)

if (arg[0] == null) {
    error = "Error: no input."
    console.error(error)
    console.log("Usage: node guess-flip --call=[heads|tails]")
} else {
    call = arg[0].split("--call=")[1]
    if (call == null || (call != "heads" || "tails")) {
        console.log("Usage: node guess-flip --call=[heads|tails]")
    } else {
        console.log(flipACoin(call))
    }
}