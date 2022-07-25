/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */


const computer = {

    price : 199,
    name : "acer",
    displaySize : 15,
    power : 10,
    isOn : true
};


const car = {

    brand : "mercedes",
    year : 2014,
    numberOfSeats : 5,
    price : 200.000
};

const water = {

    color : "transparent",
    isSweet : false,
};


const bottle = {

    content : water,
    size : 25
};

console.log(water);
console.log("Der Inhalt der Flasche ist" , bottle["content"]);