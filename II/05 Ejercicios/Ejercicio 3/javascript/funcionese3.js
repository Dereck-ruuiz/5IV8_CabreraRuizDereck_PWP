function validarn(e){
    var teclado = (document.all)? e.keyCode : e.which;
    if(teclado == 8) return true;
    var patron = /[0-9\d .]/;

    var codigo =  String.fromCharCode(teclado);
    return patron.test(codigo);
}

//función para calcular el interés
//DELIMITAR LA CANTIDAD DE DIGITOS EN EL RESULTADO
function calculard() {
    var precio = document.getElementById("precioi").value;
    var parseo = parseFloat(precio);

    if (isNaN(parseo)) {
        alert("Por favor, introduce el precio del producto.");
        document.getElementById("precioi").value = "";
        return;
    }

    var descuento = 0.15 * parseo;
    var total = (parseo - descuento).toFixed(2);

    var prod = document.getElementById("producto").value;

    document.getElementById("datos").value =
        "Producto: " + prod +
        "\nPrecio: $ " + parseo.toFixed(2) +
        "\nDescuento: $ -" + descuento.toFixed(2) +
        "\nTotal con descuento: $ " + total;
}


function borrarc() {
    document.getElementById("producto").value = "";
    document.getElementById("precioi").value = "";
    document.getElementById("datos").value = "";
}