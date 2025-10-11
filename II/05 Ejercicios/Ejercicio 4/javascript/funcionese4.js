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
    var parstf = parseFloat(caltf);

    if(isNaN(parse1) || isNaN(parse2) || isNaN(parse3) || isNaN(parseef) || isNaN(parsetf)){
        alert("Por favor, rellena todos los campos.");
        document.getElementById("calificacion1").value = "";
        document.getElementById("calificacion2").value = "";
        document.getElementById("calificacion3").value = "";
        document.getElementById("calificacione").value = "";
        document.getElementById("calificaciontf").value = "";
        return;
    }

    if(isNaN() || isNaN() || isNaN()){
        alert("Rellene todos los campos (introduce cero si no hubo ventas).");
        return;
    }

    var  = *0.1;
    var  = *0.1;
    var  = *0.1;

    var   =  + ;
    
    document.getElementById("sueldot").value =
    "Su primera comisión: $ " + com1.toFixed(2) +
    "\nSu segunda comisión: $ " + com2.toFixed(2) +
    "\nSu tercera comisión: $ " + com3.toFixed(2) +
    "\nSu sueldo neto: $ " + sueldo_total.toFixed(2);
}

function borrarc(){
        document.getElementById("sueldob").value = "";
        document.getElementById("venta1").value = "";
        document.getElementById("venta2").value = "";
        document.getElementById("venta3").value = "";
        document.getElementById("sueldot").value = "";
}

