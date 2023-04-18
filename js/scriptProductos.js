
let contenedorProductos = document.getElementById("contenedorProductos")
let catSexo= localStorage.getItem("catSexo")
let arrayProductosCatSexo=productos
  const verTodoCatSexo= document.getElementById("verTodoCatSexo")

  verTodoCatSexo.addEventListener("click", todoCatSexo)
function todoCatSexo(){
    localStorage.removeItem("catSexo")
    renderizarCards(productos)
}
if (catSexo){
    arrayProductosCatSexo= productos.filter(p=>p.catSexo.toLowerCase()===catSexo.toLocaleLowerCase())
} 

renderizarCards(arrayProductosCatSexo)

 const selecLateral=document.getElementsByClassName("hover")
 for (let i=0;i<selecLateral.length;i++){
  selecLateral[i].addEventListener("click",function(){
    this.classList.toggle("hoverActivo")
 })
    
 }
//  const listaPadre = document.querySelectorAll("li.listaPadre")
//  listaPadre.forEach(function(e){
//  e.addEventListener("click",function(){
//     let listaHija = e.querySelector("ul")
//     listaHija.classList.toggle("listaActiva")
//     e.classList.toggle("hover")
//     e.classList.toggle("hoverActivo")
//     e[1].classList.toggle("hoverActivo")
//  })})

// -----------------BUSCARDOR---------------------------------

let buscar= document.getElementById("buscarLogo")

let buscador= document.getElementById("buscar")

buscador.addEventListener("input",busqueda)

function busqueda(){
    let arrayFiltrado= productos.filter(producto=> producto.nombre.toLowerCase().includes(buscador.value.toLowerCase()))
    renderizarCards(arrayFiltrado)
}

    

// ----------CARDS



function renderizarCards(arrayProductos){
    contenedorProductos.innerHTML=""
    arrayProductos.forEach (({catSexo,catGral,prenda,nombre,descripcion,stock,precio,imgCard,prodcutoLink}) => {
        let tarjeta=document.createElement("div")
        tarjeta.className= "col"
        tarjeta.innerHTML=`
            <a class="text-decoration-none text-dark h-100 w-100" href="${prodcutoLink}">
            <div class="card h-100" id="card">
                <img src="../${imgCard}" class="card-img-top">
                <div class="card-body">
                    <h1 class="card-title fs-4">${nombre}</h1>
                    <p class="card-text">${descripcion}</p>
                    <div class="d-flex justify-content-end" ><b>$ ${precio}</b></div>
                </div>
            </div>
            </a>
        `
        contenedorProductos.append(tarjeta)
    });
}


