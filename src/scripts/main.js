// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"


const mug = makePottery("mug", 11, 4)
const bowl = makePottery("bowl", 17, 7)
const vase = makePottery("vase", 29, 11)
const plate = makePottery("plate", 4, 1)
const cup = makePottery("cup", 3, 2)


// Make 5 pieces of pottery at the wheel
const firedMug = firePottery(mug, 2000)
const firedBowl = firePottery(bowl, 2100)
const firedVase = firePottery(vase, 2300)   // this one cracks
const firedPlate = firePottery(plate, 1800)
const firedCup = firePottery(cup, 2400)     // this one cracks
// Fire each piece of pottery in the kiln

console.log(firedMug)
console.log(firedBowl)
console.log(firedVase)
console.log(firedPlate)
console.log(firedCup)



// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list