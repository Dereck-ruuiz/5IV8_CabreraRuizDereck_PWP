function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo =  String.fromCharCode(teclado);
    return patron.test(codigo);
}

//función para calcular el sueldo mensual
function calcularsueldo(){
    var sueldo_base = document.getElementById("sueldob").value;
    var vent1 = document.getElementById("venta1").value;
    var vent2 = document.getElementById("venta2").value;
    var vent3 = document.getElementById("venta3").value;

    var parse_sueldob = parseFloat(sueldo_base);
    var parse_vent1 = parseFloat(vent1);
    var parse_vent2 = parseFloat(vent2);
    var parse_vent3 = parseFloat(vent3);

    if(isNaN(parse_sueldob)){
        alert("Por favor, introduce un sueldo válido.");
        document.getElementById("sueldob").value = "";
        return;
    }

    if(isNaN(parse_vent1) || isNaN(parse_vent2) || isNaN(parse_vent3)){
        alert("Rellene todos los campos (introduce cero si no hubo ventas).");
        return;
    }

    var com1 = parse_vent1*0.1;
    var com2 = parse_vent2*0.1;
    var com3 = parse_vent3*0.1;

    var comisiones = com1 + com2 + com3;

    var sueldo_total  = parse_sueldob + comisiones;
    
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

