function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo =  String.fromCharCode(teclado);
    return patron.test(codigo);
}

//función para calcular el interés
//DELIMITAR LA CANTIDAD DE DIGITOS EN EL RESULTADO
function interes(){
    var valor = document.getElementById("cantidadi").value;
    var meses = document.getElementById("mesesi").value;

    var parseo = parseFloat(valor);
    var parseo_meses =parseInt(meses);

    if(isNaN(parseo) || parseo <= 0 || isNaN(parseo_meses) || parseo_meses <= 0){
        alert("Por favor, introduce una cantidad válida a invertir y un número de meses mayor que cero y menor que 18.");
        document.getElementById("mesesi").value = "";
        document.getElementById("cantidadi").value = "";
        return;
    }

    if(parseo_meses > 18){
        alert("El número de meses máximo para invertir es de dieciocho meses");
        document.getElementById("mesesi").value = "";
        return;
    }
    
    var valormes = (0.0805/12)*parseo_meses;

    var interes = parseo*valormes.toFixed(2);//LÍMITE A 2 DECIMALES
    
    var total  = interes + parseo;
    
    document.getElementById("saldoi").value = "$ " + total.toFixed(2); //LÍMITE A 2 DECIMALES
}

function borrarc(){
        document.getElementById("saldoi").value = "";
        document.getElementById("cantidadi").value = "";
        document.getElementById("mesesi").value = "";
}

