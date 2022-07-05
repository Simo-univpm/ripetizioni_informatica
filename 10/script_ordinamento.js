// CONSEGNA:
// Ordinamento di 3 numeri: chiedere in input tre numeri e visualizzarli ordinati;

var i = 0;
var j = 0;
var n_valori = 0;
var numeri = new Array();

function caricaVettore(){

    n_valori = parseInt(prompt("quanti valori vuoi acquisire?"));

    for(i = 0; i < n_valori; i++) {
        numeri[i] = parseInt(prompt("inserisci valore " + i));
    }

}

function ordinaValori(){

    for(i = 0; i < n_valori; i++){
        for(j = i + 1; j < n_valori; j++){

            if(numeri[i] > numeri[j]){

                var appoggio = numeri[i]
                numeri[i] = numeri[j]
                numeri[j] = appoggio

            }

        }
    }

}

function visualizza(){

    numeri.forEach(element => {
        document.write(element + ", ");
    });

    //for(i = 0; i < n_valori; i ++){

        //document.write(numeri[i])
        //document.write(", ")

    //}

}