var lista_spesa = ["elden ring", "call of duty", "skyrim", "gta", "red dead redemption 2", "fifa", "birra", "patatine"];

function fai_spesa(){

    document.getElementById("_p1").innerHTML = "<del> * mele </del>"

    lista_spesa.forEach(elem => {

        document.getElementById("_p2").innerHTML += "* " + elem + "<br>"

    });

}


function visualizza_prompt(){

    roba = prompt("questo messaggio e' inutile", "ma inserisci comunque qualcosa qui dentro va")
    alert("hai inserito: " + roba)

}

function stampa_casella_testo(){


    primo_valore = parseInt(_form._text.value)
    secondo_valore = parseInt(_form._text2.value)

    somma = primo_valore + secondo_valore

    document.getElementById("_p3").innerHTML = "risultato = " + somma

}