const First_button = document.querySelector("button");
console.log("Dzień dobry", First_button);
function przekierowanie() {
  window.location.assign("index.html");
}
First_button.onclick = przekierowanie;

const kolory = ["red", "green", "blue"];
//const kolory = ["red"];
let i = 0;
document.querySelector("body").addEventListener("click", function () {
  // document.querySelector("body").style.background = kolory[i];
  document.querySelector("body").style.background = kolory[i];
  // i = i < kolory.length - 1 ? i + 1 : 0;
  if (i < kolory.length - 1) {
    i = i + 1;
  } else {
    i = 0;
  }
  console.log(i);
});
// function zmienkolor(kolory) {
//  document.body.style.background = kolory;
//}
//kolory.onclick = zmienkolor;
//function losujkolor() {}

const age = 5;
const name = "Dominika";

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// getRandomNumber(0, 2)

//console.log(`My name is ${name} and I am ${age}`);
/*const hello = `My name is ${name} and I am ${age}`;
console.log(hello);

const fruits = ["apples", "grapes", "oranges"];
console.log(fruits[1]); */
