// console.log(1);
// setTimeout(() =>{
//     console.log(2);
// },1000)
// console.log(3);


// setInterval(() =>{
//     console.log('hello');
// })


// const miPromesa = new Promise((resolve, reject) => {
//     // Simulación de una operación asíncrona
//     setTimeout(() => {
//         const exito = true; // Cambiar a false para simular un fallo
//         if (exito) {
//             resolve("Operación exitosa");
//         } else {
//             reject("Error: Algo salió mal");
//         }
//     }, 2000); // Simula un retraso de 2 segundos
// });

// // Usar la promesa
// miPromesa
//     .then(resultado => {
//         console.log(resultado); // Se llama si la promesa se cumple
//     })
//     .catch(error => {
//         console.error(error); // Se llama si la promesa es rechazada
//     });


// (async(p1)=>{
//     let peticion = await fetch(`${p1}.json`);
//     let respuesta = await peticion.json();
//     console.log(respuesta);
// })("config")

const path = "config";

let construirEncabezado = async() =>{
    let peticion = await fetch(`${path}.json`);
    let respuesta = await peticion.json();
    let seleccion = document.querySelector("#myJsonSection");
    seleccion.insertAdjacentHTML("beforeend",`
    <h1 class="display-6 fw-normal text-body-emphasis">
    ${respuesta.section.titulo}
    </h1>
    <p class="fs-5 text-body-secondary ms-2" id="texto1">
        ${respuesta.section.parrafo.map((value) => `
            ${value.imagen}
            ${value.texto}<br>`).join(" ")}
    </p>
    `);
}

construirEncabezado()

let construirCards = async() =>{
    let peticion = await fetch(`${path}.json`);
    let respuesta = await peticion.json();
    let seleccion = document.querySelector("#cards");
    seleccion.insertAdjacentHTML("beforeend", `
    
    `)
}