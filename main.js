import { EMBEREK } from "./adat.js";
import { megjeleit,tablazatLetrehoz } from "./fuggvenyek.js";

/*
1.tablazatletrehoz(lista) -> txt  lista alapján készít egy html kódot ami táblázat, visszaadta az elkészült html szöveget, minden sor mellett egy törlés gomb 
2.megjeleit(txt) - megjeleníteni a paraméterbe kapott szöveget egy html elemben
3.rendez(lista) -> rLista megrendezi a listát az adott paraméter szerint, a megrendezett listát visszadja, akkor fut le amikor rákattintunk a táblázat fejlécérre.
4.szures(lista, keresoSzoveg) ->  szurtLista  akkor fog lefutni ha szűrő mezőbe változás történik (keyup) - a listába a név mezőben keres egyezéseket, és szűri a listát ez alapján -filter
5.sorBeszur(lista) ->ujLista; ha a submit gombra rákattintunk akkor fut le a függvény, űrlapokat átalakítjuk objektummá, és hozzáadjuk a listához (push)
6.torol(lista, index) - törli a indexedik sorát - minden sor melett lesz egy töröl ikon amire kattintva megkapjuk az adott sor indexét, és meghívodik a torol fuggveny
*/

let txt = tablazatLetrehoz(EMBEREK)
console.log(txt)
megjeleit(txt)