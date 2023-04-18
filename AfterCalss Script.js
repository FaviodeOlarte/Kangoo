let productos = [
  {
    id: 11,
    nombre: "pelota",
    categoria: "deportes",
    precio: 5000,
    stock: 3,
    img: "https://www.digitalsport.com.ar/files/products/624b1bc16431e-565339-1200x1200.jpg"
  },
  {
    id: 12,
    nombre: "remera",
    categoria: "indumentaria",
    precio: 4500,
    stock: 5,
    img: "https://d3ugyf2ht6aenh.cloudfront.net/stores/188/770/products/remera-negra-remera-hombre-remera-basica-21-6952776c38b5e6844216537450098865-640-0.webp"
  },
  {
    id: 13,
    nombre: "short",
    categoria: "indumentaria",
    precio: 8000,
    stock: 1,
    img: "https://www.lavanguardia.com/files/og_thumbnail/uploads/2020/08/22/5faa5b9aaa15a.jpeg"
  },
  {
    id: 14,
    nombre: "campera",
    categoria: "indumentaria",
    precio: 6200,
    stock: 8,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw45cda144/products/LO_IFW22099/LO_IFW22099-1.JPG"
  },
  {
    id: 15,
    nombre: "lentes",
    categoria: "accesorios",
    precio: 1500,
    stock: 2,
    img: "https://stylewatch.vtexassets.com/arquivos/ids/213324/Lentes_de_lectura_BplusD_BD222578_01.jpg"
  },
  {
    id: 16,
    nombre: "gorra",
    categoria: "accesorios",
    precio: 2800,
    stock: 6,
    img: "https://www.stockcenter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwa22994f3/products/UA_1305457-408/UA_1305457-408-1.JPG"
  },
  {
    id: 17,
    nombre: "pelota",
    categoria: "deportes",
    precio: 7000,
    stock: 0,
    img: "https://monterosport.com.ar/wp-content/uploads/2016/10/pelota-de-fubol-cuero-nacional.jpg"
  }
]

let contenedorProductos = document.getElementById("contenedorProductos")
renderizarTarjetas(productos)

let buscador = document.getElementById("buscador")
buscador.addEventListener("input", filtrarPorNombre)

let inputs = document.getElementsByClassName("input")
console.log(inputs)
for (const input of inputs) {
  input.addEventListener("click", filtrarPorCategoria)
}

function filtrarPorCategoria(e) {
  console.log(e.target.id)
  console.log(e.target.checked)
  let filtros = []
  for (const input of inputs) {
    console.log(input.checked)
    console.log(input.id)
    if (input.checked) {
      filtros.push(input.id)
    }
  }
  console.log(filtros)
  let arrayFiltrado = productos.filter(producto => filtros.includes(producto.categoria))
  /* if (arrayFiltrado.length > 0) {
    renderizarTarjetas(arrayFiltrado)
  } else {
    renderizarTarjetas(productos)
  } */
  renderizarTarjetas(arrayFiltrado.length > 0 ? arrayFiltrado : productos)
}

function filtrarPorNombre() {
  let arrayFiltrado = productos.filter(producto => producto.nombre.includes(buscador.value))
  renderizarTarjetas(arrayFiltrado)
}

function renderizarTarjetas(arrayDeProductos) {
  contenedorProductos.innerHTML = ""
  arrayDeProductos.forEach(({ categoria, nombre, precio, img }) => {
    let tarjeta = document.createElement("div")
    tarjeta.className = "tarjetaProducto"
    tarjeta.innerHTML = `
      <h2>${nombre}</h2>
      <p>Categoría: ${categoria}</p>
      <p>Precio: ${precio}</p>
      <div class=imagen style="background-image: url(${img})"></div>
    `
    contenedorProductos.appendChild(tarjeta)
  })
}

/* let prueba = document.getElementById("indumentaria")
prueba.addEventListener("click", (e) => {
  console.log("E", e.target)
  console.dir(prueba.checked)
  miFuncion(param1, param2, e.target.id)
}) */



/* let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let iniciarSesion = document.getElementById("iniciar")

usuario.addEventListener("input", () => {
  console.log("SE EJECUTA")
})

let usuarioBD = "juan"
let contraseniaBD = "juan123"

iniciarSesion.addEventListener("click", () => {
  console.log("usuario: ", usuario.value)
  console.log("contraseña: ", contrasenia.value)
  if (usuario.value == usuarioBD && contrasenia.value == contraseniaBD) {
    alert("bienvenido")
  } else {
    alert("datos incorrectos")
  }
})

let senderismo = document.getElementById("senderismo")
senderismo.addEventListener("click", filtrarPorCategoria)

function filtrarPorCategoria(e) {
  console.log(e.target.id)
  let arrayFiltrado = productos.filter(element => element.deporte == e.target.id)
  
  console.log(arrayFiltrado)
} */

/* class Producto {
  constructor(id, nombre, categoria, precio, stock, imagen) {
    this.id = id
    this.nombre = nombre
    this.categoria = categoria
    this.precio = precio
    this.stock = stock
    this.imagen = imagen
  }
}
let productosConClase = productos.map(producto => new Producto(producto.id, producto.nombre, producto.categoria))

let productosConClase2 = []
for (const producto of productos) {
  productosConClase2.push(new Producto(producto.id, ))
}
console.log(productosConClase) */

let login = document.getElementById("login")
let pantallaCompra = document.getElementById("pantallaCompra")

// REGISTRARSE
let usuario = document.getElementById("usuario")
let contrasenia = document.getElementById("contrasenia")
let registrarse = document.getElementById("registrarse")

registrarse.addEventListener("click", () => {
  console.log(usuario.value)
  console.log(contrasenia.value)
  let infoUsuario = { usuario: usuario.value, contrasenia: contrasenia.value}
  localStorage.setItem("infoUsuario", JSON.stringify(infoUsuario))
})

// INICIAR SESION
let usuarioIS = document.getElementById("usuarioIS")
let contraseniaIS = document.getElementById("contraseniaIS")
let iniciarSesion = document.getElementById("iniciarSesion")

iniciarSesion.addEventListener("click", () => {
  let infoUsuario = JSON.parse(localStorage.getItem("infoUsuario"))
  if (infoUsuario.usuario == usuarioIS.value && infoUsuario.contrasenia == contraseniaIS.value) {
    alert("Bienvenido")   
    login.classList.add("ocultar")
    pantallaCompra.classList.remove("ocultar")
  } else {
    alert("Datos incorrectos, reintente")
  }
})