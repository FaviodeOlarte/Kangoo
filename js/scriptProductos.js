let contenedorProductos = document.getElementById("contenedorProductos");
let catSexo = localStorage.getItem("catSexo");
let filtro = document.querySelectorAll(".verTodoCatSexo");
let arrayProductosCatSexo = [];
let productos = [];

function configArrayProductos(productosJSON) {
  productos = productosJSON;
  renderizarConCatSexo();
}

// ------------------FETCH -----------------

fetch("../js/productos.json")
  .then((respuesta) => respuesta.json())
  .then((productosJSON) => {
    configArrayProductos(productosJSON);
  });

function renderizarConCatSexo() {
  catSexo = localStorage.getItem("catSexo");
  if (catSexo) {
    arrayProductosCatSexo = productos.filter(
      (p) => p.catSexo.toLowerCase() === catSexo.toLocaleLowerCase()
    );
  } else {
    arrayProductosCatSexo = productos;
  }
  renderizarCards(arrayProductosCatSexo);
}

// ------------------fIN FETCH -----------------

a();

for (let i = 0; i < filtro.length; i++) {
  filtro[i].addEventListener("click", function () {
    if (i == 0) {
      localStorage.setItem("catSexo", "");
      catSexo = localStorage.getItem("catSexo");
      location.reload();
    } else if (i == 1) {
      localStorage.setItem("catSexo", "mujer");
      catSexo = localStorage.getItem("catSexo");
      location.reload();
    } else if (i == 2) {
      localStorage.setItem("catSexo", "hombre");
      catSexo = localStorage.getItem("catSexo");
      location.reload();
    } else if (i == 3) {
      localStorage.setItem("catSexo", "nino");
      catSexo = localStorage.getItem("catSexo");
      location.reload();
    }
    a();
  });
}

function a() {
  if (catSexo == "mujer") {
    filtro[0].classList.remove("hoverActivo");
    filtro[1].classList.add("hoverActivo");
    filtro[2].classList.remove("hoverActivo");
    filtro[3].classList.remove("hoverActivo");
    refrescarContenedorProductos();
  } else if (catSexo == "hombre") {
    filtro[1].classList.remove("hoverActivo");
    filtro[2].classList.add("hoverActivo");
    filtro[3].classList.remove("hoverActivo");
    filtro[0].classList.remove("hoverActivo");

    refrescarContenedorProductos();
  } else if (catSexo == "nino") {
    filtro[0].classList.remove("hoverActivo");
    filtro[1].classList.remove("hoverActivo");
    filtro[2].classList.remove("hoverActivo");
    filtro[3].classList.add("hoverActivo");
    refrescarContenedorProductos();
  } else if (!catSexo) {
    filtro[0].classList.add("hoverActivo");
    filtro[1].classList.remove("hoverActivo");
    filtro[2].classList.remove("hoverActivo");
    filtro[3].classList.remove("hoverActivo");
    refrescarContenedorProductos();
  }
}

function refrescarContenedorProductos() {
  if (catSexo) {
    catSexo = localStorage.getItem("catSexo");
    arrayProductosCatSexo = productos.filter(
      (p) => p.catSexo.toLowerCase() === catSexo.toLocaleLowerCase()
    );
  } else {
    arrayProductosCatSexo = productos;
  }

  renderizarCards(arrayProductosCatSexo);
}

refrescarContenedorProductos();
renderizarCards(arrayProductosCatSexo);

let urlParams = new URLSearchParams(window.location.search);
let cadenaDeBusqueda = urlParams.get("busqueda");
if (cadenaDeBusqueda) {
  let arrayFiltradoBusqueda = productos.filter((p) =>
    p.nombre.toLowerCase().includes(cadenaDeBusqueda.toLowerCase())
  );
  renderizarCards(arrayFiltradoBusqueda);
}

const selecLateral = document.getElementsByClassName("hover");
for (let i = 0; i < selecLateral.length; i++) {
  selecLateral[i].addEventListener("click", function () {
    this.classList.toggle("hoverActivo");
  });
}
// -----------------BUSCARDOR---------------------------------

let buscar = document.getElementById("buscarLogo");

let buscador = document.getElementById("buscar");

buscador.addEventListener("input", busqueda);

function busqueda() {
  let arrayFiltrado = arrayProductosCatSexo.filter((producto) =>
    producto.nombre.toLowerCase().includes(buscador.value.toLowerCase())
  );
  let arrayFiltradoBusqueda = Object.keys(arrayFiltrado).length;

  if (arrayFiltradoBusqueda > 0) {
    if (catSexo) {
      let arrayFiltradoCatSexo = arrayFiltrado.filter(
        (p) => p.catSexo.toLowerCase() === catSexo.toLocaleLowerCase()
      );
      renderizarCards(arrayFiltradoCatSexo);
    } else {
      renderizarCards(arrayFiltrado);
    }
  } else {
    let mensajeErrorBusquedaCat = "";
    let msgCatSexo = "";
    if (catSexo) {
      catSexo == "nino" ? (msgCatSexo = "niño") : (msgCatSexo = catSexo);
      mensajeErrorBusquedaCat = `${buscador.value.toUpperCase()} no existe para la categoría "${msgCatSexo.toLocaleUpperCase()}"`;
    } else {
      mensajeErrorBusquedaCat = `${buscador.value.toUpperCase()} no existe`;
    }
    Toastify({
      text: mensajeErrorBusquedaCat,
      duration: 1600,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#FF6262",
      },
      offset: {
        x: 50,
        y: 85,
      },
    }).showToast();
  }
}

// ----------CARDS

function renderizarCards(arrayProductos) {
  contenedorProductos.innerHTML = "";
  arrayProductos.forEach(
    ({
      catSexo,
      catGral,
      prenda,
      nombre,
      descripcion,
      stock,
      precio,
      imgCard,
      prodcutoLink,
      id,
    }) => {
      let tarjeta = document.createElement("div");
      tarjeta.id = `${id}`;
      tarjeta.className = "col";
      tarjeta.innerHTML = `
            <a class="text-decoration-none text-dark h-100 w-100" >
            <div class="card h-100" id="card">
                <img src="../${imgCard}" class="card-img-top">
                <div class="card-body h-100 d-flex flex-column">
                    <h1 class="card-title fs-4">${nombre}</h1>
                    <p class="card-text">${descripcion}</p>
                    <div class="d-flex  flex-fill justify-content-between align-items-end" >
                        <button class="agregarAlCarritoCard" onclick="agregarAlCArritoCards(this)">Agregar al carrito</button>
                        <b>$ ${precio}</b>
                    </div>
                </div>
            </div>
            </a>
        `;
      contenedorProductos.append(tarjeta);
    }
  );
}

// ------------Carrito------------
let carritoJSON = localStorage.getItem("carrito");

let carritoLocal;
let carrito = [];

if (!carritoJSON == "") {
  carritoLocal = JSON.parse(carritoJSON);
  carrito = carritoLocal;
}

function agregarAlCArritoCards(boton) {
  if (nombreCuentaActiva) {
    let divPadre = boton.parentNode.parentNode.parentNode.parentNode.parentNode;
    let idProducto = divPadre.getAttribute("id");
    let buscarProducto = productos.find((p) => p.id == idProducto);
    console.log(carrito);
    if (buscarProducto) {
      if (!carrito.length == 0) {
        let productoExistenteCarrito = carrito.find((p) => p.id == idProducto);

        if (productoExistenteCarrito) {
          productoExistenteCarrito.unidades++;
          productoExistenteCarrito.subTotal =
            Number(productoExistenteCarrito.unidades) *
            Number(productoExistenteCarrito.precioUnit);
        } else {
          carrito.push({
            id: buscarProducto.id,
            nombre: buscarProducto.nombre,
            descripcion: buscarProducto.descripcion,
            imgCard: buscarProducto.imgCard,
            precioUnit: buscarProducto.precio,
            unidades: 1,
            subTotal: buscarProducto.precio,
          });
        }
      } else {
        carrito.push({
          id: buscarProducto.id,
          nombre: buscarProducto.nombre,
          descripcion: buscarProducto.descripcion,
          imgCard: buscarProducto.imgCard,
          precioUnit: buscarProducto.precio,
          unidades: 1,
          subTotal: buscarProducto.precio,
        });
      }

      localStorage.setItem("carrito", JSON.stringify(carrito));
      Toastify({
        text: "Agregado al carrito",
        duration: 1200,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    }
  } else {
    Toastify({
      text: "Antes debe iniciar seccion",
      duration: 1200,
      destination: "./pag-iniciar-seccion.html",
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#FF6262",
      },
    }).showToast();
  }
}
