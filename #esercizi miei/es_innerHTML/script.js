var lista_spesa = ["elden ring", "call of duty", "skyrim", "gta", "red dead redemption 2", "fifa", "birra", "patatine"];

function fai_spesa(){

    document.getElementById("_p1").innerHTML = "<del> * mele </del>"

    lista_spesa.forEach(elem => {

        document.getElementById("_p2").innerHTML += "* " + elem + "<br>"

    });

}