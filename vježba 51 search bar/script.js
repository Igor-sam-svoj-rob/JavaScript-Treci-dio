"use strict";

//https://jsonplaceholder.typicode.com/

/*Fetch je promise, nakon promisa ide then. U prvom definiramo response (res) i taj response
želimo pretvoriti u json. Onda želimo taj json spojiti sa našim podacima u data. Kako bi to
napravili trebamo napravit u HTML-u template i spojiti ga sa našim js-om.  */

//Spojit ćemo HTML template sa js-om

//Prvi dio
/*
const userCardTemplate = document.querySelector("[data-user-template]");

 fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    //ovdje ćemo dohvatiti card unutar templatea. Sa cloneNode(true) kažemo da kopira
    //sve unutar templatea. I to će napraviti tzv. document fragment
    const card = userCardTemplate.content.cloneNode(true);
    console.log(card); //ispišimo u consolu da vidimo taj document fragment
    //kako bi došli do podataka unutar tog document fragmenta trebamo dobiti djecu od toga
    //Iduća sekcija
  }); */

//Drugi dio, korigiraj prvi dio sa ovim

/* const userCardTemplate = document.querySelector("[data-user-template]");

    fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    const card = userCardTemplate.content.cloneNode(true).children[0];
    console.log(card);
  }); */

//treći dio, korigiraj drugi sa ovim
/*Kako bi došli do podataka iz kartica, moramo napraviti petlju*/

/* const userCardTemplate = document.querySelector("[data-user-template]");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      console.log(user); //sada ćemo u console logu dobit podatke za usera, nama treba ime i mail
    });
  }); */

//četvrti dio, korigiraj treći sa ovim
/*Sada idemo spojiti header i body sa imenima i mailovima */
/*
const userCardTemplate = document.querySelector("[data-user-template]");
fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]"); */
/*Sa ovim i iduća 3 reda ćemo definiriati varijable
      koje selektiraju data atribute iz kartica i postavljaju textContent da bude jednak podacima iz jsona*/
/* const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.mail;
    });
  }); */ //Sada smo popunili taj HTML i u HTML-u dodamo data atribute na user-cards sekciju i onda se vraćamo ovdje
//te dodajemo novu varijablu sa hoistingom na vrh.

//peti dio

/* Dodajemo novu varijablu */

/* const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card); //Nakon ovog appenda, vidjet ćemo sve podatke koje smo tražili iz JSONA
    });
  }); */

//sada idemo u izradu searcha. Prvo ćemo iz HTML-a spremiti data-search atribut spremiti u novu varijablu.

//šesti dio

/*Prvo definiramo novu varijablu, onda ćemo raditi event listener*/

/* const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");

//Dodat ćemo eventlistener na input, koji će reagirati svaki put kada nešto novo ukucamo
//Nakon toga želimo uzeti sve usere i prolaskom (loopanjem) kroz usere i sakriti one koji se ne slažu sa našim
//inputom. Probat ćemo napraviti novi user objekt. I stoga ćemo definirati objet users i definirati prazni array

let users = [];

searchInput.addEventListener("input", function (event) {
  const value = event.target.value;
  console.log(users); //sada kada vidimo sve usere i njihove mailove, idemo napraviti usporedbu da li ono što
  //klikamo ima veze s tim elementima i njihovim sadržajem, ako nema sakrij karticu. Možeš obrisati console sad
  users.forEach((user) => {
    const isVisible = user.name.includes(value) || user.email.includes(value);
    //includes radi provjeru da li ukucani string slova postoji u user imenima ili user mailovima
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  }); */

//Sedmi dio

/*U karticama imamo Leanne. Ako ukucamo leanne sa malim slovima ništa se neće pokazati zato što je naš search
osjetljiv na velika i mala slova. Da bi tome doskočili moramo sve prebaciti u mala slova sa lowercaseom prije
nego krenemo u pretragu, tako da bude svejedno kako ukucavamo u search (velika ili mala slova) on će sve
prebaciti u mala slova, i search i kartice prije nego nam izbaci rješenje*/

const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
let users = [];

searchInput.addEventListener("input", function (event) {
  const value = event.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(value) ||
      user.email.toLowerCase().includes(value);
    user.element.classList.toggle("hide", !isVisible);
  });
});

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    users = data.map((user) => {
      const card = userCardTemplate.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      header.textContent = user.name;
      body.textContent = user.email;
      userCardContainer.append(card);
      return { name: user.name, email: user.email, element: card };
    });
  });
