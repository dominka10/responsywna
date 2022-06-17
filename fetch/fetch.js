const PobierzDane = document.querySelector(".GetDataButton");
const Kontener = document.querySelector(".KontenerNaObrazki");
const ApiUrl = "https://dog.ceo/api/breeds/image/random";
const RasyPsow = document.querySelector(".RasyPsow");
// funkcja obsługuje kliknięcie przycisku
function Klik() {
  // const WybranaRasa = RasyPsow.value;
  let Url = ApiUrl;
  // if (WybranaRasa != "random") {
  //   Url = `https://dog.ceo/api/breed/${WybranaRasa}/images/random`;
  // }
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

// dlaczego skoro mamy jeden kontener pojawiają się kolejne obrazki zamiast zastępować się
// przypinanie funkcji Klik do klikania przycisku PobierzDane

PobierzDane.addEventListener("click", Klik);
//"
