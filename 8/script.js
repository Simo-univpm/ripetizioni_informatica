var importo = 0
var sconto = 0

function acquisisci_input(){

    importo = parseInt(prompt("inserisci l'importo:"))

}


function calcola_sconto(){

    if(importo > 1000) sconto = (importo/100)*5
    else if(importo <= 1000) sconto = (importo/100)*3

    alert("sconto: " + sconto)

}


// bonus se riesce a calcolare l'importo scontato --> importo scontato = importo - sconto