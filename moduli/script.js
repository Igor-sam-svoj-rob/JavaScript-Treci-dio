import "./shoppingCart.js";

import * as kosarica from "./shoppingCart.js"; //ovo je sada kada malo pogledate kao importanje API-a

kosarica.dodajKosarica("pašteta", 5);
console.log(kosarica.ukupnaCijena);

kosarica.dodajKosarica("kruh", 1);
kosarica.dodajKosarica("mlijeko", 1);
