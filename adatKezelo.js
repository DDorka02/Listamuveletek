export function rendez(lista, kulcs, rIrany){
    const rList= lista.sort(function (e1,e2) {
        return e1[kulcs]<e2[kulcs]?-1*rIrany:1*rIrany
    })
    return rList
} 

/* a return-be negatív vagy poztív kell, a nev szövege változó, ezért a <> értelmezhető ezért kell egy elagázas */

//szorgalmi hogy az ékezetes betűket kicseréljük nem ékezetesre, és úgy rendezzük a listát, replaceAll


export function szures(lista, keresoSzoveg){
    const szLista=lista.filter(function(ember) {
        return ember.nev.toUpperCase().includes(keresoSzoveg.toUpperCase())
    })
    return szLista
}