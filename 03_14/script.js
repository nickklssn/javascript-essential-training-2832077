/**
 * Challenge: Create a new object type
 * 
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";


const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

const harryPotter = new Book(
  "Harry Potter",
  2001,
  "Rowling"
);

const theBoys = new Book(
  "The Boys",
  2022,
  "Nick"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());
console.log(harryPotter);
console.log(harryPotter.author);
console.log(theBoys);
console.log(theBoys.author);
