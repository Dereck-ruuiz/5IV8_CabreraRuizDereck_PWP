function invertirPalabras(){
    
    var texto= document.getElementById("p1-input").value;

    if(texto == ""){
        alert("Por favor, ingresa algunas palabras");
        return;
    }

    var palabras = texto.split(" ");
    var invertidas = palabras.reverse();
    var outp = invertidas.join(" ");
    
    document.getElementById("p1-output").textContent = outp;
}

function borrarc(){
        document.getElementById("p1-input").value = "";
        document.getElementById("p1-output").textContent = "Esperando datos...";
}