//import * as kosarica from './shoppingCart.js';

/*napisat ćemo IIFE - immediately Invoked Function Expression - ovo je funkcija koja se neće ponovo koristiti, 
piše se jednom, zato se ovako piše. Ovo se još zove tzv. module pattern. Zašto postoje? Zato što ovako možemo
sakriti podatke i abstrakcije (funkcije) koje koristimo*/

const sadrzajKosarica = (function () {
  const kosarica = [];
  const dostava = 10;
  const ukupnaCijena = 250;
  const ukupnaKolicina = 25;

  const dodajKosarica = function (proizvod, kolicina) {
    kosarica.push({ proizvod, kolicina });
    console.log(`${kolicina} ${proizvod} je dodano u košaricu`);
  };
  //napisat ćemo još jednu funkciju za povratnu informaciju koliko je naručeno
  const narudzba = function (proizvod, kolicina) {
    kosarica.push({ proizvod, kolicina });
    console.log(`${kolicina} ${proizvod} naručena količina`);
  };
  return {
    dodajKosarica,
    kosarica,
    ukupnaCijena,
    ukupnaKolicina,
  };
})();

//kada smo definirali IIFE objekt, idemo ga i pozvati

sadrzajKosarica.dodajKosarica("pašteta", 5);
sadrzajKosarica.dodajKosarica("kruh", 1);
sadrzajKosarica.dodajKosarica("mlijeko", 1);
console.log(sadrzajKosarica);
