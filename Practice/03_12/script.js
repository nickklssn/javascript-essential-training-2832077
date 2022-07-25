import Backpack from "./Backpack.js";
import Bottle from "./Bottle.js";

const waterBottle = new Bottle(
    "Mineau",
    "water",
    500,
    "Plastic",
    false
);

const colaBottle = new Bottle(
    "Coca-Cola",
    "cola",
    1500,
    "Plastic",
    true
);

const everyBackpack = new Backpack(
    "test",
    200,
    "grey",
    5,
    2,
    2,
    "yes"
);

console.log(everyBackpack.color);
everyBackpack.color = "black";
console.log(everyBackpack.color);
everyBackpack.lidOpen
console.log(waterBottle);
console.log(waterBottle.FilledOrNot("yes"));
waterBottle.FilledOrNot = "no";
console.log(waterBottle.FilledOrNot);