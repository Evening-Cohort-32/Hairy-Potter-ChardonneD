Assessment: 
Explain how you got the HTML, with the correct data, displayed in the browser?
-I was able to display the HTML correctly by using the usePottery() function to obtain a secured copy of the pottery items that had been created to sale. WIth the PotteryListmodule, I iterated through the catalog array and converted each pottery object into an HTML string with the help of the template in the instructions. It was through the <article> element in the main.js, where I was able to return the combined HTML string, showing each property via placeholder, thus rendering the pottery on the DOM.


In the PotteryList module, when you iterate your pottery, you need to show the evidence of what the weight property's value is for the 2nd piece of pottery. Use Loom to record your browser window with the developer tools open and show those values.
Paste your video's public URL here

The PotteryWheel module has a single function named makePottery. Why doesn't that module have all of the other code in it?
-

The pottery shop has learned that there is a set of customers that are willing to buy cracked pottery at a discounted price of $2.50. That means that the cracked pottery should now be displayed in the catalog. Explain the changes that this new business strategy would cause to your algorithm.
-Updating the cracked pottery to a sold option of $2.50 would require the early if statement within the function to be removed. Assigning the function to a price of $2.50 when the pottery.cracked is defined as true. This change then pushes the cracked pottery into the catalog like the other pottery. 

In the Kiln module, you have a firePottery() function. You need to demonstrate how to use the debugger to verify the values of the parameters for that function when your code runs. Use Loom to record your browser window with the developer tools open and show those values.
Paste your video's public URL here