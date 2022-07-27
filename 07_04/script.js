/**
 * Challenge: Build and modify an array
 * - Build an array with 8 items
 * - Remove the last item
 * - Add the last item as the first item on the array 
 * - Sort the items by alphabetical order
 * - Use the find() method to find a specific item in the array
 * - Remove the item you found using the find method from the array.
 */

const array = ["Starlight", "Nick", "Homelander", "Benjamin", "Sarah", "Stormfront", "The Deep", "Butcher"];
console.log(array);
//console.log(array.pop());


/* var butcherFirst = array.pop()
array.unshift(butcherFirst);
console.log(array); */

/* array.sort();
console.log(array); */

/* const nick = array.includes("Nick");
console.log(nick); */


const indexOfElement = array.indexOf("The Deep")
array.splice(indexOfElement, 1);
console.log(array);


