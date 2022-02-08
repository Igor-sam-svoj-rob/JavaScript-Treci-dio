"Use-strict";

//idemo na https://reqres.in/

function fetchData() {
  //console.log("Dohvati podatke, pogledaj u Network jel radi");
  //console.log(fetch("https://reqres.in/api/users?page=2"));

  //Rješavamo prvo ovaj dio
  /* Idemo sada napraviti fetch metodu unutar ove funkcije. Njom ćemo pozvati adresu API-a, i iz nje sa .then
  metodom rješavamo asinkrone zadatke za API poziv. To je dio tzv. Promise API-a. .Then metoda može onda iz 
  povratnih informacija koristiti response objekte. Imamo ih više, pogledajte ih na using fetch na MDN-u.
  Nakon što smo sa response.json povukli podatke, onda ih možemo i pogledati sa .then data. Na kraju trebamo 
  uzeti slučaj greške sa .catch*/

  /*   fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      //console.log(response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData(); */

  //Drugi dio
  /*dodajemo rješenja za situacije gdje postoje errori*/
  /* fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      //console.log(response); //ovo ubaci kada pokazuješ error i onda makni
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData(); */

  //Treći dio
  /* idemo sada ovo stvarno i ispisati u HTML*/
  /*   fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      const html = data.data.map((user) => {
        return `<p>Zovem se ${user.first_name}</p>`;
      });
      //.join(""); //Kada dodamo ovo, onda nam imena više neće prikazati kao listu nego pojedinačne stringove
      document.querySelector("#api").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData(); */

  //četvrti dio

  /* Sada možemo u novostvorenom HTML dijelu svašta napraviti. Idemo se igrati*/

  fetch("https://reqres.in/api/users?page=2")
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      const html = data.data
        .map((user) => {
          return `
          <div class="user">
          <p><img src="${user.avatar}" alt="${user.first_name}"></p>
          <p>Zovem se ${user.first_name}</p>
          <p>Moj mail je ${user.email}</p>
          </div>`;
        })
        .join("");
      document.querySelector("#api").innerHTML = html;
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();

//Za kraj idemo dodati nove podatke sa metodom post data

/*Kopiramo funkciju odozgo i obrišemo sve iz .then data. te na početku kod fetcha dodajemo nove stvari pored
adrese API-a metodom POST. Također trebamo dodati header sa content typeom */

function postData() {
  fetch("https://reqres.in/api/users?page=2", {
    method: "POST",
    headers: { "Content-type": "application/json" }, //Ovo govori APIu koji šaljemo neke dodatne info
    body: JSON.stringify({
      name: "Igor",
      email: "igor.jevremovic@predavaci.algebra.hr",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw Error("Error");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

postData();

//idući primjer : https://codepen.io/FlorinPop17/pen/vYYaLwR
