function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo =  String.fromCharCode(teclado);
    return patron.test(codigo);
}

function calcularAlumnos(){
    var men = document.getElementById("hombres").value;
    var wmen = document.getElementById("mujeres").value;

    var parse_men = parseInt(men)
    var parse_wmen = parseInt(wmen)

    if(isNaN(parse_men) || isNaN(parse_wmen)){
        alert("rellene todos los campos");
        return;
    }
    
    var total = parse_men + parse_wmen
    var prc_men = parse_men*100/total
    var prc_wmen = parse_wmen*100/total
    
    document.getElementById("porcentajesa").value =
    "Porcentaje de mujeres: " + prc_wmen.toFixed(2) + "%" +
    "\nPorcentaje de hombres: " + prc_men.toFixed(2) + "%";
}

function borrarc(){
        document.getElementById("hombres").value = "";
        document.getElementById("mujeres").value = "";
        document.getElementById("porcentajesa").value = "";
}

