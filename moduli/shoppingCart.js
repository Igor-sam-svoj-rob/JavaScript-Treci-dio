console.log("exportiranje modula");

//kada u modulima definiramo varijable, onda su one definirane samo unutar modula (tzv. module scope)
const dostava = 10;
const kosarica = [];

//ako hoćemo da nam ova funkcija ispod bude dostupna van modula, moramo kada ju napišemo dodati export na početak
//ovo neće raditi ako recimo to stavimo unutar npr. if petlje, to mora biti top lvl deklaracija
export const dodajKosarica = function (proizvod, kolicina) {
  kosarica.push({ proizvod, kolicina });
  console.log(`${kolicina} ${proizvod} je dodano u košaricu`);
};

//Možemo i na ovaj način exportati varijable i njihove vrijednosti

export const ukupnaCijena = 250;
export const ukupnaKolicina = 25;
