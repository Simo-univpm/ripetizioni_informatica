var i = 0
var n_valori = 0
var numeri = new Array()
var somma = 0
var media = 0

function inserisci_valori(){

    n_valori = parseInt(prompt("quanti valori vuoi inserire?"))
    for(i = 0; i < n_valori; i ++) numeri[i] = parseFloat(prompt("inserisci numero " + i));

}

function calcola_media() {

    for(i = 0; i < n_valori; i ++) parseFloat(somma += numeri[i])
    media = parseFloat(somma/n_valori)

    alert("la media dei valori inseriti e': " + media)

}