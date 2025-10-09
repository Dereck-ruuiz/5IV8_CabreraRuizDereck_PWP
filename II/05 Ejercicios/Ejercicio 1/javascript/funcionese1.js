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

    var parseo = parseFloat(valor);

    var interes = Math.round(parseo*(0.0805)*100)/100;//LÍMITE A 2 DECIMALES
    
    var total  = Math.round((interes + parseo)*100)/100;
    
    document.getElementById("saldoi").value = "$ " + total; //LÍMITE A 2 DECIMALES
}

function borrarc(){
        document.getElementById("saldoi").value = "";
        document.getElementById("cantidadi").value = "";
}