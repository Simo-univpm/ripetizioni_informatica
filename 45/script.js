var i = 0
var k = 0

var n_valori = 0
var numeri = new Array()

var soglia = 0
var numeri_sopra_soglia = new Array()


function inserisci_valori(){

    n_valori = parseInt(prompt("quanti valori vuoi inserire?"))
    for(i = 0; i < n_valori; i ++) numeri[i] = parseInt(prompt("inserisci numero " + i));

}

function inserisci_soglia(){

    soglia = parseInt(prompt("inserisci il valore della soglia di paragone:"))

}

// funzione tosta, qui uso 2 vettori
function visualizza_valori_superiori() {

    for(i = 0; i < n_valori; i ++) {

        if(numeri[i] > soglia) {
            numeri_sopra_soglia[k] = numeri[i]
            k ++
        }

    }

    for(i = 0; i < k; i ++) {

        document.write(numeri_sopra_soglia[i])

    }

}