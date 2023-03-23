
//Primer Entrega 

// Pedir al usuario que ingrese un número
//const numero = prompt("Ingresa un número:");

/* Verificar si el número es positivo, negativo o cero
if (numero > 0) {
    alert("El número es positivo");
} else if (numero < 0) {
    alert("El número es negativo");
} else {
    alert("El número es cero");
}*/


/* Imprimir números del 1 al 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}*/

//Segunda Entrega 

//Funcion
const saludar = () => {
    console.log("Bienvenid@s a Cogotoon");
};

saludar();


//Objeto 
const picaoreo = {
    size: "7cm",
    material: "PLA",
    value: 1999
};


//Array de Localidades

let localidadesCABA =
    ["Agronomía", "Almagro",
        "Balvanera", "Barracas",
        "Belgrano", "Boedo",
        "Caballito", "Chacarita",
        "Coghlan", "Colegiales",
        "Constitución", "Flores",
        "Floresta", "La Boca", "La Paternal",
        "Liniers", "Mataderos", "Monte Castro",
        "Monserrat", "Nueva Pompeya",
        "Núñez", "Palermo", "Parque Avellaneda",
        "Parque Chacabuco", "Parque Chas",
        "Parque Patricios", "Puerto Madero",
        "Recoleta", "Retiro", "Saavedra", "San Cristóbal",
        "San Nicolás", "San Telmo", "Vélez Sársfield",
        "Versalles", "Villa Crespo", "Villa del Parque",
        "Villa Devoto", "Villa Gral. Mitre", "Villa Lugano",
        "Villa Luro", "Villa Ortúzar", "Villa Pueyrredón",
        "Villa Real", "Villa Riachuelo",
        "Villa Santa Rita", "Villa Soldati", "Villa Urquiza"];


//Busqueda y Filtro del Array

let inputBusqueda = document.getElementById("inputBusqueda");

let listaLocalidades = document.getElementById("listaLocalidades");

inputBusqueda.addEventListener("input", function () {
    let busqueda = inputBusqueda.value.toLowerCase();
    let localidadesFiltradas = localidadesCABA.filter(function (localidad) {
        return localidad.toLowerCase().includes(busqueda);
    });
    listaLocalidades.innerHTML = "";
    localidadesFiltradas.forEach(function (localidad) {
        let li = document.createElement("li");
        li.textContent = localidad;
        listaLocalidades.appendChild(li);
    });
});


