
export const firePottery = (pottery, temperature) => {
    //all pottery is fired if the temperature is between 2200 and 2700 degrees
    pottery.fired = true
    // all pottery is cracked if the temperature is above 2200 degrees
    if (temperature > 2200) {
        pottery.cracked = true
      } else {
        pottery.cracked = false
    }
return pottery
}