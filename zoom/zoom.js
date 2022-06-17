const PobierzDane = document.querySelector(".GetDataButton");
const Kontener = document.querySelector(".KontenerNaObrazki");
const ApiUrl = "https://dog.ceo/api/breeds/image/random";

// funkcja obsługuje kliknięcie przycisku
function Klik() {
  let Url = ApiUrl;
  PobieranieDanych(Url);
}
// funkcja wywołuje zapytanie
function PobieranieDanych(Url) {
  fetch(Url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const AdresObrazka = data.message;
      Wyswietlanie(AdresObrazka);
    });
}

// funkcja wyświetla dane z API
function Wyswietlanie(AdresObrazka) {
  if (Kontener.firstChild != null) {
    // warunek jeśli kontener nie jest null( pusty)
    Kontener.firstChild.remove(); // to usuń
  }
  const Obrazek = new Image();
  // const Obrazek = document.querySelector(".Obrazek");
  Obrazek.src = AdresObrazka;
  Obrazek.classList.add("Piesek");
  Kontener.prepend(Obrazek); // prepend - dodaj do początku append - dodaj do końca
}

PobierzDane.addEventListener("click", Klik);
// klikanie na obrazek

let open = Kontener; //to działa ale powinno się klikać tylko na obrazek a nie na cały kontener
let close = document.querySelector(".CloseModal");

let modal = document.querySelector(".modal");
function openfn(event) {
  modal.classList.add("active");
  event.stopPropagation();
}

// dodawanie obrazka do modalu

// //creating the modal
// let imgModal = (src) => {
//   const modal = document.createElement("div");
//   modal.setAttribute("class", "modal");
//   //add the modal to the main section or the parent element
//   document.querySelector(".main").append(modal);
//   //adding image to modal
//   const newImage = document.createElement("img");
//   newImage.setAttribute("src", src);
//   modal.append(newImage)
function closefn(event) {
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

function toggle(link) {
  let blur = document.querySelector(".container");
  let modal = document.querySelector(".container");
  link.addEventListener("click", function () {
    blur.classList.toggle("active");
    modal.classList.toggle("active");
  });
}
toggle(open);
toggle(close);

let imgModal = (src) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", "modal");
  //add the modal to the main section or the parent element
  document.querySelector(".main").append(modal);
  //adding image to modal
  const newImage = document.createElement("img");
  newImage.setAttribute("src", src);
  modal.append(newImage);
};
// -------------- wyświetlanie obrzka w modalu -----------
// let open = document.querySelector(".KontenerNaObrazki");
// let close = document.querySelector(".CloseModal");

// let modal = document.querySelector(AdresObrazka);
// function openfn(event) {
//   modal.classList.add("active");
//   event.stopPropagation();
// }
