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
          `).join("")}
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
  let terms = document.querySelector("#terms");
  terms.insertAdjacentHTML("beforeend", /*HTML*/`
    ${respuesta.terms}
  `)
}

crearTabla()

let crearFooter = async() =>{
  let peticion = await fetch(`${path}.json`);
  let respuesta = await peticion.json();
  let seleccion = document.querySelector("#footer");
  seleccion.insertAdjacentHTML("beforeend", /*HTML*/`
    <div class="row">
      <div class="col-12 col-md">
        ${respuesta.footer.img}
        <small class="d-block mb-3 text-body-secondary">&copy; ${respuesta.footer.campus}</small>
      </div>
      <div class="col-6 col-md">
        <h5>${respuesta.footer.features.title}</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${respuesta.footer.features.item1}</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${respuesta.footer.features.item2}</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>${respuesta.footer.resources.title}</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${respuesta.footer.resources.item1}</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${respuesta.footer.resources.item2}</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${respuesta.footer.resources.item3}</a></li>
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${respuesta.footer.resources.item4}</a></li>
        </ul>
      </div>
      <div class="col-6 col-md">
        <h5>${respuesta.footer.about.title}</h5>
        <ul class="list-unstyled text-small">
          <li class="mb-1"><a class="link-secondary text-decoration-none" href="#">${respuesta.footer.about.item1}</a></li>
        </ul>
      </div>
    </div>
  `)
}

crearFooter()