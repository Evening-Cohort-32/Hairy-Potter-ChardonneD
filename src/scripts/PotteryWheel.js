// Imports go first
//import () from "./Kiln.js"
//import () from "./PotteryCatalog.js"


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
/*
let pottery = makePottery(
    {
        shape: "mug",
        weight: 10,
        height: 3,
        id: propertyId++,
    }, 
    {
        shape: "bowl",
        weight: 15, 
        height: 5,
        id: propertyId++,
    },
    {
        shape: "vase",
        weight: 20,
        height: 10,
        id: propertyId++,    
    }, 
    {
        shape: "plate",
        weight: 5,
        height: 1,
        id: propertyId++,

    }, 
    {
        shape: "cup",
        weight: 3,
        height: 2,
        id: propertyId++,
    }
*/


// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list
