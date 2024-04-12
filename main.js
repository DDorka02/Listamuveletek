import { EMBEREK } from "./adat.js";
import { rendez } from "./adatKezelo.js";
import { megjeleit,tablazatLetrehoz } from "./fuggvenyek.js";

/*
1.tablazatletrehoz(lista) -> txt  lista alapján készít egy html kódot ami táblázat, visszaadta az elkészült html szöveget, minden sor mellett egy törlés gomb 
2.megjeleit(txt) - megjeleníteni a paraméterbe kapott szöveget egy html elemben
3.rendez(lista) -> rLista megrendezi a listát az adott paraméter szerint, a megrendezett listát visszadja, akkor fut le amikor rákattintunk a táblázat fejlécérre.
4.szures(lista, keresoSzoveg) ->  szurtLista  akkor fog lefutni ha szűrő mezőbe változás történik (keyup) - a listába a név mezőben keres egyezéseket, és szűri a listát ez alapján -filter
5.sorBeszur(lista) ->ujLista; ha a submit gombra rákattintunk akkor fut le a függvény, űrlapokat átalakítjuk objektummá, és hozzáadjuk a listához (push)
6.torol(lista, index) - törli a indexedik sorát - minden sor melett lesz egy töröl ikon amire kattintva megkapjuk az adott sor indexét, és meghívodik a torol fuggveny
*/

let rIrany = 1
init(EMBEREK)
szuresNevSzerint()

function init(lista) {
    let txt = tablazatLetrehoz(lista)
    megjeleit(txt)
    rendezesEsemeny()
}

//szorgalmi egyéb mező szűrése


function szuresNevSzerint() {
    const szuroELEM=$("#sznev")
szuroELEM.on("keyup",function() {
    let szoveg = szuroELEM.val()
    init(szures(EMBEREK, szoveg))
})
}

function rendezesEsemeny(){
    const nevMezoELEM = $(".adatok table th").eq(0);
    nevMezoELEM.on("click", function () {
        const lista=rendez(EMBEREK,"nev",rIrany)
        console.log(lista)
        init()
        rIrany*=(-1)
    })

}


