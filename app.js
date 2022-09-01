class Servicio {
    constructor(nombre, apellido, email, ubicacion, vehiculo, distancia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.ubicacion = ubicacion;
        this.vehiculo = vehiculo;
        this.distancia = distancia;
        
    }
}




function tipoVehiculo() {
    let vehiculo = document.querySelector("#vehiculo").value;
        switch(vehiculo){
            case "moto":
                return 2000;
            case "auto":
                return 4000;
            case "camioneta":
                return 5000;
            default : 2000; 
        }
}


function distanciaDeTraslado() {
    let distancia = document.querySelector("#distancia").value;;
        for (let i = 1; i >=15; i++);{
            return resultado = distancia * 20;
        }
}



function demoraDelServicio() {
    let ubicacion = document.querySelector("#ubicacion").value;
    switch(ubicacion){
        case "Caba":
            return "menor a 2hs";
        case "Amba":
            return "menor a 4hs";
    }
}

let detalleServicio = document.getElementById("formulario")

function elegirServicios(){
   
        let datos = document.getElementById("vehiculo");
       

document.getElementById("servicioFinal").innerHTML = `Usted eligio el vehiculo ${datos}`
}