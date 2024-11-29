
window.onload = function() {
    
    let palos = ["oros", "copas", "espadas", "bastos"];

    let numeros = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"];
  
    let baraja = Math.floor(Math.random() * palos.length);

    let numero = Math.floor(Math.random() * numeros.length);

    console.log(numero);

    if(numero == "8"){
        numero = "10";
    }else if (numero == "9"){
        numero = "11";
    }else if (numero == "10"){
        numero ="12";
    };

    let opcion = "./baraja_espanyola/"+palos[baraja]+"/"+ numero + "_de_"+palos[baraja]+".png";

    let x = document.createElement("IMG");
    x.setAttribute("src", opcion);
    estilos(x);
    document.querySelector("#cartas").appendChild(x);

};

let boton = document.getElementById("magia"); 
boton.addEventListener("click", muestra);

function muestra (){

    let numerocarta = document.getElementById("numero").value;
    let palocarta = document.getElementById("palocarta").value;


    let opcion = "./baraja_espanyola/"+palocarta+"/"+numerocarta+ "_de_"+palocarta+".png";

    let x = document.createElement("IMG");
    x.setAttribute("src", opcion);
    estilos(x);
    document.querySelector("#cartas2").replaceChildren(x);

}


function estilos (micartita){

    micartita.setAttribute("height", "450");
    micartita.style.border = "solid 5px";
    micartita.style.borderRadius = "25px";
    micartita.style.padding = "25px";

}


