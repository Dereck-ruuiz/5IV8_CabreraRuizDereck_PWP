
function calcularedad(){
    var fecha = document.getElementById("fechan").value;

    if(fecha == ""){
        alert("Por favor, ingrese su fecha de nacimiento");
        document.getElementById("fechan").value = "";
        return;
    }

    var partes = fecha.split("-");
    var year = partes[0];

    if(year.length != 4){
        alert("El año debe tener 4 dígitos");
        document.getElementById("fechan").value = "";
        return;
    }

    var fecha_actual = new Date();
    var fecha_nacimiento = new Date(fecha);
    var edad = fecha_actual.getFullYear() - fecha_nacimiento.getFullYear();
    
    if(fecha_nacimiento > fecha_actual){
        alert("Introduzca una fecha válida.")
        document.getElementById("fechan").value = "";
        document.getElementById("cedad").value = "";
        return;
    }

    document.getElementById("cedad").value = edad + " años";
}

function borrarc(){
    document.getElementById("fechan").value = "";
    document.querySelector("input[readonly]").value = "";
}