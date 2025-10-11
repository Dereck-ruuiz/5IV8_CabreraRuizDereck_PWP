function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo =  String.fromCharCode(teclado);
    return patron.test(codigo);
}

//función para calcular la calificación del alumno
function calcularc(){
    var cal1 = document.getElementById("calificacion1").value;
    var cal2 = document.getElementById("calificacion2").value;
    var cal3 = document.getElementById("calificacion3").value;
    var caleef = document.getElementById("calificacione").value;
    var caltf = document.getElementById("calificaciontf").value;

    var parse1 = parseFloat(cal1);
    var parse2 = parseFloat(cal2);
    var parse3 = parseFloat(cal3);
    var parseef = parseFloat(caleef);
    var parsetf = parseFloat(caltf);

    if(isNaN(parse1) || isNaN(parse2) || isNaN(parse3) || isNaN(parseef) || isNaN(parsetf)){
        alert("Por favor, rellena todos los campos.");
        return;
    }

    if(parse1 > 10 || parse2 > 10 || parse3 > 10 || parseef > 10 || parsetf > 10){
        alert("Por favor, ingresa una calificación válida (no mayor a diez).");
        return;
    }

    var calif = (parse1 + parse2 + parse3)/3
    var calift = calif*0.55;
    var califte = parseef*0.3;
    var califttf = parsetf*0.15;

    var calificacion_total = calift + califte + califttf;
    
    document.getElementById("calificacionf").value =
    "Su calificación final: " + calificacion_total.toFixed(2);
}

function borrarc(){
        document.getElementById("calificacion1").value = "";
        document.getElementById("calificacion2").value = "";
        document.getElementById("calificacion3").value = "";
        document.getElementById("calificacione").value = "";
        document.getElementById("calificaciontf").value = "";
        document.getElementById("calificacionf").value = "";
}

