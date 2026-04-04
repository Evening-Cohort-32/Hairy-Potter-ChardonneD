const catalog = [] //empty array to hold fired pottery objects that are ready to be sold

export const toSellOrNotToSell = (pottery) => {
    // Can't sell cracked pottery
    if (pottery.cracked) {
        return pottery
    }
    //$40 pottery
    if (pottery.weight >= 6) {
        pottery.price = 40;
    } else {
        // $20 pottery
        pottery.price = 20;
    }
    // Add the pottery to the catalog of items to sell
    catalog.push(pottery);
    return pottery;
}
export const usePottery = () => {
    // Return a copy of the catalog w/ unmutable data
    return structuredClone(catalog);
}





/*  
export function toSellOrNotToSell(firedPottery) {
    const ? {//having trouble nto sure what to put here, should I be using an if statement or a switch statement?
    if (firedPottery.weight >= 6) {
        firedPottery.price = 40;
    } else if (firedPottery.weight < 6) {
        firedPottery.price = 20;
} else if (firedPottery.cracked === true !==0) {
        firedPottery.price = 0;

    }
}
}*/