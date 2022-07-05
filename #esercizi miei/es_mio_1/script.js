/* 
    CONSEGNA:
    acquisisci 3 valori e mettili in un array A.
    poi prendi i 3 valori e mettili in 3 variabili diverse (non array)
    poi prendi i valori delle 3 variabili e mettili in un nuovo array B.
    poi prendi i 3 valori dall'array B e fanne la somma.
    stampa/visualizza la somma.
*/

var i = 0 // indice
var var_0 = 0 // variabili per contenere i valori dell'array
var var_1 = 0
var var_2 = 0
var somma = 0 // var per contenere la somma dei valori
var numeri = new Array() // primo array
var numeri_copia = new Array() // secondo array

function carica_vettore(){

    for(i = 0; i < 3; i++) {
        numeri[i] = parseInt(prompt("inserisci valore " + i))
    }

}

function svolgi_esercizio(){

    var_0 = numeri[0]
    var_1 = numeri[1]
    var_2 = numeri[2]

    numeri_copia[0] = var_0
    numeri_copia[1] = var_1
    numeri_copia[2] = var_2

    for(i = 0; i < 3; i++){

        somma += numeri_copia[i]

    }

    // oppure

    //somma = somma + numeri_copia[0]
    //somma = somma + numeri_copia[1]
    //somma = somma + numeri_copia[2]

}

function visualizza(){
    
    document.write(somma)

}