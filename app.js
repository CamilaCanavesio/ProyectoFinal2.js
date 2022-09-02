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

function validarFormulario(e) {
    
    e.preventDefault();
    
    let miformulario = e.target

    const nombre = document.querySelector("#nombre").value; 
    const apellido = document.querySelector("#apellido").value;
    const email = document.querySelector("#email").value;
    const costoDelTraslado = tipoVehiculo() + distanciaDeTraslado();
    const tiempoDeEspera = demoraDelServicio();


    const servicio = new Servicio(nombre, apellido, email, costoDelTraslado, tiempoDeEspera);

        imprimir(servicio);

    miformulario.reset();

    $('#submit').on('click', aplicarEstilo());
    
    function aplicarEstilo() {
        document.getElementById("vent").style.display="block"
        
    };


}
function imprimir() {


 
    let costoDelTraslado = tipoVehiculo() + distanciaDeTraslado();
    let tiempoDeEspera = demoraDelServicio();

    const nuevoDiv = document.createElement ("div");

    nuevoDiv.classList.add("item");
    nuevoDiv.setAttribute("class", "ventana");

    const h1 = document.createElement("h1");
    h1.textContent = `Hola ${nombre.value}, tu tiempo de espera sera ${tiempoDeEspera} y el costo total es de $${costoDelTraslado}.`;
   
    nuevoDiv.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = `En menos de 2 minutos te llegara un email a ${email.value} para que puedas seguir en tiempo real el servicio.`;
    nuevoDiv.appendChild(p);
    

    let base = document.querySelector("#vent");
    
    base.innerHTML = '';
    base.appendChild(nuevoDiv);

}