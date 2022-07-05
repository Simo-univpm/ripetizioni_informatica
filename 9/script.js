function converti(){

    voto = parseFloat(prompt("inserisci il voto dell'esame (anche con la virgola):"))

    if(voto <= 4){alert("gravemente insufficiente")} 
    else if ((voto > 4) && (voto < 6)){alert("insufficiente")}
    else if ((voto >= 6) && (voto < 7)){alert("sufficiente")}
    else if ((voto > 7) && (voto < 9)){alert("bene")}
    else if (voto >= 9) {alert("ottimo")}

}