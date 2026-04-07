
// Make 5 pieces of pottery at the wheel
let propertyId = 1 //label for pottery id, starts at 1 and increments with each piece of pottery created
// function that creates pottery
export const makePottery = (shape, weight, height) => {
    const pottery = {
       shape: shape,
       weight: weight,
       height: height,
       id: propertyId, //assigns the current value of propertyId to the pottery object as its id
    }
    propertyId++ //increments the pottery id for the next piece of pottery created
    return pottery //returns the pottery object with the specified properties
}
