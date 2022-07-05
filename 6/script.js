var ore = 0
var minuti = 0
var secondi = 0

function acquisisci_input(){

    ore = parseInt(prompt("inserisci ore:"))

}

function calcola_minuti(){

    minuti = ore * 60
    alert(ore + " ore corrispondono a " + minuti + " minuti")

}

function calcola_secondi(){

    secondi = minuti * 60
    alert(minuti + " minuti corrispondono a " + secondi + " secondi")

}