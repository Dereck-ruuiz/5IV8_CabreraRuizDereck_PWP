/*
Javascrip es un lenguaje multiparadigma

Acepta la programacion funcional, estructurada, POO, y a eventos

Dentro de JS, no existe el typado de variables int, string, float, etc

Solo existen 3 tipos de variables de acuerdo al estandar ES6: VAR, LET, CONST
*/

function validar(formulario){
    //validar que el campo nombre acepte más de tres caracteres
    if(formulario.nombre.value.length < 4){
        alert("Por favor escribe más de tres caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }

    //validación para únicamente letras
    var checkStr = formulario.nombre.value;
    alert(checkStr);

    var abcOk = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMáéíúó" + " ";

    var allValid = true;

    //tenemos que comparar la cadena de nombre vs el abecedario

    for(var i = 0; i < checkStr.length; i++){
        var caracteres = checkStr.charAt(i);
        for(var j = 0; j < abcOk.length; j++){
            if(caracteres == abcOk.charAt(j)){
                break;
            }
        }
        if(j == abcOk.length){
            allValid = false;
            break;
        }
    }
    if(!allValid){
        alert("Escriba únicamente letras en el campo del nombre");
        formulario.nombre.focus();
        return false;
    }
}