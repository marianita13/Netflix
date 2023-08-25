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
seleccion.insertAdjacentHTML("beforeend", /*HTML*/`
        ${respuesta.cards.map((value) => /*HTML*/`
         <div class="col"> 
           <div class="card mb-4 rounded-3 shadow-sm"> 
             <div class="card-header py-3 text-bg-primary border-primary">
                <h4 class="my-0 fw-normal">${value.titulo}</h4> 
             </div>
             <div class="card-body">
              <h1 class="card-title pricing-card-title">${value.cop}<small class="text-body-secondary fw-light">${value.precio}</small></h1>
              <ul class="list-unstyled mt-3 mb-4">
                <li>${value.descripcion}<li>
              </ul>
              <button type="button" class="w-100 btn btn-lg btn-outline-primary">${value.boton}</button>
            </div>
          </div>
        </div>`).join(" ")}
`)
}
construirCards()

let crearTabla = async() =>{
  let peticion = await fetch(`${path}.json`);
  let respuesta = await peticion.json();
  console.log("Hola");
  let seleccion = document.querySelector("#tabla");
  seleccion.insertAdjacentHTML("beforeend", /*HTML*/`
    <h2 class="display-6 text-center mb-4">${respuesta.table.titulo}</h2>
      <table class="table text-center">
        <thead>
          <tr>
            <th style="width: 34%;"></th>
            ${respuesta.table.head.map((value) => /*HTML*/`
              <th style="width: 22%;">${value.text}</th>
            `).join("")}
          </tr>
        </thead>
        <tbody>
          ${respuesta.table.body.map((valor) => /*HTML*/`
          <tr>
            <th scope="row" class="text-start">${valor.title}</th>
            <td>${valor.caracteristica1}</td>
            <td>${valor.caracteristica2}</td>
            <td>${valor.caracteristica3}</td>
          </tr>
          `)}
        </tbody>
        <tbody>
          <tr>
            <th scope="row" class="text-start">${respuesta.table.title}</th>
            ${respuesta.table.check.map((valorC) => /*HTML*/ `
              <td>${valorC.chulo}</td>
            `).join(" ")}
          </tr>
        </tbody>
      </table>
  `)
}

crearTabla()

