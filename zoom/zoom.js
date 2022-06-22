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
  // warunek - gdy obrazek nie jest null to usuń (to sprawia ze mamy tylko jeden obrazek w modalu)
  if (Kontener.firstChild != null) {
    // warunek jeśli kontener nie jest null( pusty)
    Kontener.firstChild.remove(); // to usuń
  }
  const Obrazek = new Image();
  // const Obrazek = document.querySelector(".Obrazek");
  Obrazek.src = AdresObrazka;
  Obrazek.classList.add("Piesek");
  Obrazek.addEventListener("click", openfn);
  Kontener.prepend(Obrazek); // prepend - dodaj do początku append - dodaj do końca
}

PobierzDane.addEventListener("click", Klik);
// klikanie na obrazek
// zamyka modal i otwiera klase active
let close = document.querySelector(".CloseModal");
let modal = document.querySelector(".modal");
function openfn(event) {
  modal.classList.add("active");
  event.stopPropagation();
  const IstniejacyObrazek = modal.querySelector("img");

  if (IstniejacyObrazek != null) {
    // warunek jeśli kontener nie jest null( pusty)
    IstniejacyObrazek.remove(); // to usuń
  }
  // tworzy nową zmienną do pobierania scr
  const AdresObrazka = event.target.getAttribute("src");
  const newImage = document.createElement("img");
  // nadajemy nazwę klasie zeby móc ją stylować
  newImage.classList.add("PiesekwModalu");
  newImage.setAttribute("src", AdresObrazka);
  //dodaje obrazek do modala
  modal.append(newImage);
}

function closefn(event) {
  modal.classList.remove("active");
}
function closeOnBodyfn(event) {
  console.log(event);
  if (!event.target.closest(".modal")) {
    closefn();
  }
}

close.addEventListener("click", closefn);
document.body.addEventListener("click", closeOnBodyfn);

// TODO:
// - PO KLIKNIĘCIU W OBRAZEK OTWÓRZ MODAL
// - PO OTWARCIU MODALA POBIERZ ADRES KLIKNIĘTEGO OBRAZKA
// - STWÓRZ OBRAZEK Z POBRANYM ADRESEM I WYŚWIETL GO W MODALU
