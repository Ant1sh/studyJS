"use strict";

let getBooks = document.querySelectorAll(".book");
getBooks[0].before(getBooks[1]);
getBooks[2].before(getBooks[4]);
getBooks[4].after(getBooks[3]);
getBooks[3].after(getBooks[5]);
// console.log(getBooks);
//
let changeImage = document.querySelector("body");
changeImage.setAttribute(
  "style",
  "background-image: url(./image/you-dont-know-js.jpg)"
);
document.body.style.backgroundImage = "url(./image/you-dont-know-js.jpg";

let getSale = document.querySelectorAll(".adv");
getSale[0].remove();
// console.log(getSale);

let changeText = document.querySelectorAll("a")[2];
changeText.textContent = "Книга 3. this и Прототипы Объектов";
//  console.log(changeText);

let getSecondChange = document.querySelector("ul")[1],
  getItemLi = document.querySelectorAll("li");

getItemLi[13].after(getItemLi[8]);
getItemLi[15].after(getItemLi[8]);
getItemLi[9].after(getItemLi[12]);
getItemLi[12].after(getItemLi[14]);
getItemLi[37].after(getItemLi[45]);
getItemLi[40].after(getItemLi[38]);
getItemLi[43].after(getItemLi[41]);
console.log(getItemLi);


let getClassUl = document.querySelectorAll("ul")[5],
  elemLi = document.querySelectorAll("li")[55];
elemLi.insertAdjacentHTML("afterend", "<li>Глава 8: За пределами ES6</li>");
// console.log(getClassUl);
// console.log(elemLi);
