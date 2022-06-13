function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
}
const person1 = new Person("John", "Doe", "10-10-1998");
console.log(person1.dob.getMonth());

/*
const x = 30;

const color = x < 10 ? "red" : "blue";

switch (color) {
  case "red":
    console.log("color is red");
    break;
  default:
    console.log("color is not red");
    break;
}

function addNumsfn(num1, num2) {
  console.log(num1 + num2);
}
addNumsfn();

if (x === 10) {
  console.log("X is 10 ");
} else if (x > 10) {
  console.log("x is greater than 10");
} else if (x < 10) {
  console.log("x is less than 10");
}



const person = {
  firstName: "John",
  age: 30,
  hobbies: ["sports", "hiking", "cooking"],
  adress: {
    street: "50 main st",
    state: "MA",
  },
};
console.log(person.adress.street);



let open = document.querySelector(".OpenModal");
let close = document.querySelector(".CloseModal");

let modal = document.querySelector(".modal");
function openfn(event) {
  modal.classList.add("active");
  event.stopPropagation();
}
function closefn() {
  modal.classList.remove("active");
}
function closeOnBodyfn(event) {
  console.log(event);
  if (!event.target.closest(".modal")) {
    closefn();
  }
}

open.addEventListener("click", openfn);
close.addEventListener("click", closefn);
document.body.addEventListener("click", closeOnBodyfn);






/*function toggle(link) {
  let blur = document.querySelector(".container");
  let modal = document.querySelector(".container");
  link.addEventListener("click", function () {
    blur.classList.toggle("active");
    modal.classList.toggle("active");
  });
}
toggle(open);
toggle(close); */
