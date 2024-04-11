export function tablazatLetrehoz(lista){
    let txt = "<div class='table-responsive'><table class='table table-striped'>"
    txt += "<thead>"
    txt += "<tr><th></th><th>Név</th><th>Kor</th><th>Nem</th><th></th>"
    txt += "</thead>"
    txt += "<tbody>"
    lista.forEach((elem , index)=> {
        txt += `<tr>
            <td>${elem.nev}</td>
            <td>${elem.kor}</td>
            <td>${elem.nem?"nő":"férfi"}</td>
            <td><button id="${index}">🗑️</button></td>
        </tr>`
    });
    txt += "</tbody>"
    txt += "</table> </div>"
    return txt
}

export function megjeleit(txt){
    const ELEM = $(".adatok")
    ELEM.html(txt)
}