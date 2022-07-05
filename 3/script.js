// attributi trapezio rettangolo
var base_minore = 0
var base_maggiore = 0
var altezza = 0

// attributi da calcolare per l'esercizio
var area = 0
var perimetro = 0
var lato_obliquo = 0


function acquisisci_input(){

    base_maggiore = parseInt(prompt("inserisci base maggiore"))
    base_minore = parseInt(prompt("inserisci base minore"))
    altezza = parseInt(prompt("inserisci base altezza"))

    document.getElementById("_p1").innerHTML = "base maggiore: " + base_maggiore
    document.getElementById("_p2").innerHTML = "base minore: " + base_minore
    document.getElementById("_p3").innerHTML = "altezza: " + altezza

}

function calcola_area(){

    area = ((base_maggiore + base_minore) * altezza)/2
    alert("area: " + area)

}

function calcola_perimetro(){

    // calcolo de lato obliquo sfruttando pitagora
    lato_obliquo = Math.sqrt(((base_maggiore-base_minore)**2) + (altezza**2)) // extra se lo fa diventare intero con parseInt
    perimetro = base_maggiore + base_minore + altezza + perimetro
    
    alert(

        "lato obliquo: " + lato_obliquo + "\n" + 
        "perimetro: "    + perimetro

    )

}