function validarMayusculas(e){
    var teclado = (document.all) ? e.keyCode : e.which;
    if (teclado == 8) return true;
    var patron = /[A-Z\d ,]/;
    var letra = String.fromCharCode(teclado);
    return patron.test(letra);
}



function calcularPalabras(){
    var texto = document.getElementById("p3-input").value;
    
    if(texto == ""){
        alert("Por favor, ingresa las palabras separadas por comas.");
        return;
    }

    if(texto.indexOf(" ") != -1){
        alert("No se aceptan espacios, solo comas");
        document.getElementById("p3-input").value = "";
        return;
    }

    var palabras = texto.split(",");
    var palabraf = "";
    var maxf = 0;

    for(var i = 0; i < palabras.length; i++){
        var palabra = palabras[i];
        var letras = [];
        var contador = 0

        for(var j = 0; j< palabra.length; j++){
            var letra = palabra[j];
            var repetida = false;

            if(letra >= "A" && letra <= "Z"){
                for(var k = 0; k < contador; k++){
                    if(letras[k] == letra){
                        repetida = true;
                    }
                }
                if(repetida == false){
                    letras[contador] = letra;
                    contador ++;
                }
            }
        }
        if(contador > maxf){
            maxf = contador;
            palabraf = palabra;
        }
    }

    document.getElementById("p3-output").textContent = "La palabra con mayor número de letras sin repetir es: " + palabraf + " (" + maxf + " letras únicas)";
}