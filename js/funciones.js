
window.onload = function() {
    
    let palos = ["oros", "copas", "espadas", "bastos"];

    let numeros = ["1", "2", "3", "4", "5", "6", "7", "10", "11", "12"];
  
    let baraja = Math.floor(Math.random() * palos.length);

    if (baraja == "2"){

        let numero = Math.floor(Math.random() * numeros.length) + 1;

        if (numero == "8"){

            numero = "10";

        }else if (numero == "9"){

            numero = "11";

        }else if (numero == "10"){

            numero = "12";

        }

        let opcion = "./baraja_espanyola/oros/"+ numero + "_de_oros.png";

        var x = document.createElement("IMG");
        x.setAttribute("src", opcion);
        x.setAttribute("width", "500");
        x.setAttribute("height", "500");
        console.log(x);
        document.querySelector("#cartas").appendChild(x);

    }else if (baraja == "3"){

        let numero = Math.floor(Math.random() * numeros.length) + 1;

        if (numero == "8"){

            numero = "10";

        }else if (numero == "9"){

            numero = "11";

        }else if (numero += "10"){

            numero = "12"

        }
  
        let opcion = "./baraja_espanyola/copas/"+numero + "_de_copas.png";

        var x = document.createElement("IMG");
        x.setAttribute("src", opcion);
        x.setAttribute("width", "500");
        x.setAttribute("height", "500");
        console.log(x);
        document.querySelector("#cartas").appendChild(x);

    }else if (baraja == "0"){ 

        let numero = Math.floor(Math.random() * numeros.length) + 1;

        if (numero == "8"){

            numero = "10";

        }else if (numero += "9"){

            numero = "11";

        }else if (numero += "10"){

            numero = "12"

        }

        let opcion = "./baraja_espanyola/espadas/"+numero + "_de_espadas.png";

        var x = document.createElement("IMG");
        x.setAttribute("src", opcion);
        x.setAttribute("width", "500");
        x.setAttribute("height", "500");
        console.log(x);
        document.querySelector("#cartas").appendChild(x);

    }else if (baraja == "1"){

        let numero = Math.floor(Math.random() * numeros.length)+ 1;

        if (numero == "8"){

            numero = "10";

        }else if (numero == "9"){

            numero = "11";

        }else if (numero == "10"){

            numero = "12"

        }

        let opcion = "./baraja_espanyola/bastos/"+numero + "_de_bastos.png";

        var x = document.createElement("IMG");
        x.setAttribute("src", opcion);
        x.setAttribute("width", "500");
        x.setAttribute("height", "500");
        console.log(x);
        document.querySelector("#cartas").appendChild(x);

    }

};


  
    //var x = document.createElement("IMG");
    //x.setAttribute("src", imagenes[i]);
    //x.setAttribute("width", "500");
    //x.setAttribute("height", "500");
    //document.querySelector("#cartas").appendChild(x);