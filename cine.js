var arrPeliculas=[]
mostrarMenu()

function mostrarMenu() {
    var seguir = true
    
    do {
        let op = parseInt(prompt("Que accion desea realizar"+
        "\nGuardar Pelicula: 1"+"\nMostrar peliculas: 2\nComprar boletos: 3\nSalir : 4"))
        switch (op) {
            case 1:
                AggPelicula()
                break;
            case 2:
                console.clear()
                mostrarPeliculas(arrPeliculas)
                break
            case 3:
                console.clear()
                comprarBoleto(arrPeliculas)
                break
                case 4:
                    seguir=false
                    break
            default:
                break;
        }
    } while (seguir==true);    
}


function AggPelicula() {

    var Pelicula = {
        titulo:"",
        edad:0
    }

    try{
    Pelicula.titulo=prompt("Ingrese el titulo de la pelicula")
    Pelicula.edad=parseInt(prompt("Ingrese la clasificacion de la pelicula"))
    if (typeof Pelicula.edad!=='number') {
        throw "La clasificacion debe ser un numero"
    }else if (isNaN(Pelicula.edad)) {
        throw "La clasificacion debe ser un numero"
        
    }else{
        arrPeliculas.push(Pelicula)
    }
    }catch(error){
        console.error(error);
    }
   
}


function mostrarPeliculas(peliculas) {
    for (let i = 0; i < peliculas.length; i++) {
        console.log("Pelicula"+(i+1)+":")
        console.log("Titulo: "+peliculas[i].titulo+" clasificacion: "+peliculas[i].edad);
    }
    
}

function comprarBoleto(peliculas) {
   mostrarPeliculas(peliculas)
   try {
    let index = parseInt(prompt("Cual pelicula desea ver"))
    let edad = parseInt(prompt("Ingrese su edad"))
    if (typeof edad !== 'number'|| typeof index !== 'number') {
        throw "Se esperaba un numero"
    }else if (isNaN(edad)||isNaN(index)) {
        throw "Se esperaba un numero"
    }else if (peliculas.length<1) {
        throw "No existen peliculas"
    }
    else{
        if (edad>peliculas[index-1].edad) {
            alert("Disfrute su pelicula")
        }else{
            alert("Es menor de edad, no puede ver esta pelicula")
        }
    }
   } catch (error) {
    console.error(error);
   }
}

