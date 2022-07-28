/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */


function resizeElement(newName){

    let image = document.querySelector("article[class = backpack] figure img");
    let addedWidth = image.setAttribute(newName, 8);
    
};

/* renameElement("width") */

const anonymResize = function (newName) {

    let image = document.querySelector("article[class = backpack] figure img");
    let addedWidth = image.setAttribute(newName, 8);
}

/* anonymResize("width"); */


const arrowResize = newName => {

    let image = document.querySelector("article[class = backpack] figure img");
    let addedWidth = image.setAttribute(newName, 8);
}

arrowResize("width");




