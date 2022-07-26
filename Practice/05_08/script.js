/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */

const leftInput = document.querySelector("article[id = pack02] ul li[data-side = left] form input");
const changed = leftInput.setAttribute("placeholder", "Hier bin ich");
const removed = leftInput.removeAttribute("placeholder");

const art = document.querySelector("article[id = pack01] h1").classList;
const artAddedClass1 = art.add("new-class");
const artAddedClass2 = art.add("super-new-class");
const rp = art.replace("super-new-class", "servussss");

const firstImage = document.querySelector("article[id = pack01] figure img");

const addedAttribute = firstImage.setAttribute("width", 800);
const req = document.querySelector("article figure img").getAttribute("width")
console.log(firstImage);
console.log(req)

/* const artRemovedClass = art.remove("new-class");
const artToggleClass = art.toggle("hello");
const artReplaceClass = art.replace("new-class", "bayern"); */



//console.log(art);
/* console.log(leftInput);
console.log(test); */