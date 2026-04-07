import { usePottery } from "./PotteryCatalog.js"


export const PotteryList = () => {
    const potteryToSell = usePottery() //sold catalog
        let htmlString = "" //empty string to hold HTML representation of pottery for sale

    for (const pottery of potteryToSell) { //structure of the HTML for each piece of pottery for sale
      htmlString += `
        <section class="pottery" id="pottery--${pottery.id}">
            <h2 class="pottery__shape">${pottery.shape}</h2>
            <div class="pottery__properties">
        Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
    </div>
    <div class="pottery__price">Price is $${pottery.price}</div>
</section>`
    }
return htmlString // returns the HTML structure above
}