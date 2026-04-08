const catalog = [] //empty array to hold fired pottery objects that are ready to be sold

export const toSellOrNotToSell = (pottery) => {
    // Can't sell cracked pottery - UPdate cracked pottery is $2.50
    if (pottery.cracked === true) {
        pottery.price = 2.50; // Set a low price for cracked pottery
    }
    //$40 pottery
    else if (pottery.weight >= 6) {
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




