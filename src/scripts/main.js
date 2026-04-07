// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { PotteryList } from "./PotteryList.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"

const mug = makePottery("mug", 11, 4)
const bowl = makePottery("bowl", 17, 7)
const vase = makePottery("vase", 29, 11)
const plate = makePottery("plate", 4, 1)
const cup = makePottery("cup", 3, 2)

// Make 5 pieces of pottery at the wheel
const firedMug = firePottery(mug, 2000)
const firedBowl = firePottery(bowl, 2100)
const firedVase = firePottery(vase, 2300)   // cracks
const firedPlate = firePottery(plate, 1800)
const firedCup = firePottery(cup, 2400)     // cracks

//checking work
//console.log(mug, bowl, vase, plate, cup)

//Check work
//console.log(firedMug, firedBowl, firedVase, firedPlate, firedCup)

// Fire each piece of pottery in the kiln
toSellOrNotToSell(firedMug)
toSellOrNotToSell(firedBowl)
toSellOrNotToSell(firedVase)
toSellOrNotToSell(firedPlate)
toSellOrNotToSell(firedCup)

//console.log(usePottery())
//console.log(potteryList())

//Putting Pottery on the DOM -rendering HTML string
const parentHTMLelement = document.querySelector(".potteryList")
parentHTMLelement.innerHTML = PotteryList() //empty string to hold HTML representation of pottery for sale
