let urlParams2 = new URLSearchParams(window.location.search);
let cadenaDeBusqueda2 = urlParams2.get("busqueda");
let valorBuscador = "";
if (cadenaDeBusqueda2) {
  valorBuscador = `value=${cadenaDeBusqueda2}`;
}
const nombrePagActual = window.location.pathname
  .substring(window.location.pathname.lastIndexOf("/") + 1)
  .split(".")[0];

let nombreCuentaActivaJSON = sessionStorage.getItem("cuentaActiva");
let nombreCuentaActiva = "";
if (nombreCuentaActivaJSON) {
  nombreCuentaActiva = JSON.parse(
    nombreCuentaActivaJSON
  ).userNombre.toUpperCase();
}
let navbar = document.querySelector("header");

navbar.innerHTML = "";
let crearNavbar = document.createElement("nav");
crearNavbar.classList =
  "row navbar navbar-expand-md bg-warning bg-gradient m-0 w-100";
crearNavbar.style = "box-shadow: 0 0 6px black;";
let refCarrito;
let carritoPopUp = "";
if (nombreCuentaActiva) {
  refCarrito = "";
} else {
  if (nombrePagActual === "index") {
    refCarrito = 'href="./pages/pag-iniciar-seccion.html"';
  } else refCarrito = 'href="../pages/pag-iniciar-seccion.html"';
}
if (nombrePagActual === "index") {
  crearNavbar.innerHTML = `
            <div class="container-fluid p-0">
                        <div class="col-2 col-sm-2 ps-lg-2" >
                            <a class=" m-1" id="logo" title="Kangoo - Home" href="./index.html"><img src="./logo/Logo 1.png" alt="Kangoo"  height="70px" /></a>
                        </div>

                        <!-- LOGO -->
                        <div class="col-7 col-sm-7" >
                            <form id="form-busqueda" class="d-flex" role="search"> 
                                 <input type="text" id="input-busqueda" placeholder="Buscar..." style="width: 90%;border-radius: 10px;border: 1px solid rgba(125, 107, 60, 0.945); padding: 2px 12px; outline: none;">
                                <button type="submit" id="buscarLogo" class="btn btn-outline-secondary mx-2 px-2 py-0 pt-1" >
                                    <span class="material-symbols-outlined " height="24px">search</span>
                                </button>
                            </form>
                            <div class="mt-2" style="height: 27px;">
                                <ul id="categorias" class="d-flex justify-content-start list-unstyled ms-4 " >
                                    <li class="rounded-3 marcaRuta" ><a class="dropdown-item mx-3 " href="./index.html">Ropa</a></li>
                                    <li class="rounded-3"><a class="dropdown-item mx-3" href="./index.html">Ofertas</a></li>
                                    <li class="rounded-3"><a class="dropdown-item mx-3" href="./index.html">Tendencias</a></li>
                                </ul>   
                            </div>
                        </div>

                        <!-- bucador -->
                        <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                        </button>

                        <!-- Boton hambuerguesa -->
                        <div class="collapse navbar-collapse pt-2 " id="navbarSupportedContent">
                            <ul class="navbar-nav  mb-2 ms-md-auto align-items-center pe-4">
                                <li id="nombreUsuario" class="nav-item ocultar ">
                                        </li>
                                <li class="nav-item mx-1 mx-lg-3 mx-xxl-5 ">
                                        <a id="usuario" class="nav-link" aria-current="page" ${refCarrito}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="35px" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                                                </svg>
                                        </a></li>
                                <li class="nav-item me-1">
                                         <a  id="carrito" class="nav-link" aria-current="page" ${carritoPopUp}>
                                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                                            </svg>
                                         </a>
                                <li  class="nav-item mx-1 mx-lg-3 mx-xxl-5">
                                            <a id="favorito" class="nav-link" aria-current="page" ${carritoPopUp}>
                                                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-heart-fill p-.5 mb-0" viewBox="0 -1 18 18">
                                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                                </svg>
                                            </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
    `;
} else {
  crearNavbar.innerHTML = `
    <div class="container-fluid p-0">
        <div class="col-2 col-sm-2 ps-lg-2 " >
            <a class=" m-1" id="logo" title="Kangoo - Home" href="../index.html"><img src="../logo/Logo 1.png" alt="Kangoo"  height="70px" /></a>
        </div>

        <!-- LOGO -->
        <div class="col-7 col-sm-7" >
            <div>
                <form id="busqueda"  class="d-flex" role="search">
                    <label for="buscar"> </label>
                    <input type="search" name="" id="buscar" ${valorBuscador} placeholder="Buscar"  style="width: 90%;border-radius: 10px;border: 1px solid rgba(125, 107, 60, 0.945); padding: 2px 12px;">
                </form>
            </div>
            <div class="mt-2" style="height: 27px;">
                <ul id="categorias" class="d-flex justify-content-start list-unstyled ms-4 " >
                    <li class="rounded-3 marcaRuta" ><a class="dropdown-item mx-3" href="../index.html">Ropa</a></li>
                    <li class="rounded-3"><a class="dropdown-item mx-3" href="../index.html">Ofertas</a></li>
                    <li class="rounded-3"><a class="dropdown-item mx-3" href="../index.html">Tendencias</a></li>
                </ul>   
            </div>
        </div>

        <!-- bucador -->
        <button class="navbar-toggler me-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
        </button>

         <!-- Boton hambuerguesa -->
        <div class="collapse navbar-collapse pt-2 " id="navbarSupportedContent">
            <ul class="navbar-nav  mb-2 ms-md-auto align-items-center pe-4">
                <li id="nombreUsuario" class="nav-item ocultar ">
                        </li>
                <li class="nav-item mx-1 mx-lg-3 mx-xxl-5 ">
                    <a id="usuario" class="nav-link" aria-current="page" ${refCarrito}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="35px" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                        </svg>
                        </a></li>
                    <li class="nav-item me-1">
                        <a id="carrito"  class="nav-link" aria-current="page" ${carritoPopUp}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="30px" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
                                <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                            </svg>
                        </a>
                    <li  class="nav-item mx-1 mx-lg-3 mx-xxl-5">
                            <a id="favorito" class="nav-link" aria-current="page" ${carritoPopUp}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" fill="currentColor" class="bi bi-heart-fill p-.5 mb-0" viewBox="0 -1 18 18">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                                </svg>
                            </a>
                    </li>
                </ul>
        </div>
    </div>
    `;
}
navbar.append(crearNavbar);

// ---------------Nmbre Usuario      ----------------
const userLogo = document.getElementById("usuario");
const userNombre = document.getElementById("nombreUsuario");

if (nombreCuentaActiva) {
  userLogo.classList.add("ocultar");
  userNombre.classList.remove("ocultar");
  userNombre.innerHTML = "";
  let nombreNav = document.createElement("h1");
  nombreNav.className = "mostrar";
  nombreNav.innerHTML = `${nombreCuentaActiva}`;
  userNombre.append(nombreNav);
  refCarrito = "";
}

// ---------Abrir Carrito----------

let abrirCarrito = document.getElementById("carrito");
abrirCarrito.addEventListener("click", sweetCarrito);

let carritoJson = localStorage.getItem("carrito");
if (carritoJson) {
  let carritoStorage = JSON.parse(carritoJson);
}

//  -----------------
let numeroRefCompra = Math.round(Math.random() * 10000000);

function sweetCarrito() {
  let carritoJosonStorage = localStorage.getItem("carrito");
  let totalCarrito;
  if (!nombreCuentaActiva == "") {
    if (carritoJosonStorage) {
      carritoStorage = JSON.parse(carritoJosonStorage);
      totalCarrito = carritoStorage
        .map(function (p) {
          return p.subTotal;
        })
        .reduce(function (a, b) {
          return a + b;
        });

      let contenido = "";
      carritoStorage.forEach((producto) => {
        contenido += `
            <div class="d-flex justify-content-between">
                <img src="../${producto.imgCard}" width="60" height="60">
                <div class="">
                    <h2  class="fs-5">${producto.nombre} - $ ${producto.precioUnit} </h2>
                    <h3 class="fs-6">Cantidad: ${producto.unidades}
                    </h3>
                </div>
                <div class="d-flex align-items-end">
                <div class="ps-4" style="flex: 1; border-left: 1px solid #ccc;">
                    <h3 class="fs-6">Sub total:</h3>
                    <h3 class="fs-6"><B> $  ${producto.subTotal}</B>
                    </h3>
                </div>
                </div>
            </div>
            <hr>`;
      });

      Swal.fire({
        title: "Productos del Carrito",
        html:
          contenido +
          `<hr style="border: solid 2px"><div class='pe-4 d-flex justify-content-end' ><h3 class="fs-6">Total: <b>  $${totalCarrito}</b></h3></div><hr style="border: solid 2px">`,
        showCloseButton: true,
        showDenyButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> COMPRAR',
        denyButtonText: '<i class="fa fa-thumbs-down"></i>ElIMINAR',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            icon: "success",
            title: "Compra realizada con exito",
            html: `<h3 class="fs-6">Usted podra rastrear el porducto con el siguiente numero de referencia # ${numeroRefCompra}.</h3>
                <h3 class="fs-6">¡ Gracias por su preferancia !</h3> `,
          });
          localStorage.removeItem("carrito");
          carrito = [];
        } else if (result.isDenied) {
          Swal.fire({
            icon: "warning",
            title: "Carrito eliminado",
            html: `<h3 class="fs-6">¡ Gracias por su preferancia !</h3> `,
          });
          localStorage.removeItem("carrito");
          carrito = [];
        }
      });
    } else {
      Toastify({
        text: "Carrito vacío",
        duration: 1200,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background:
            "linear-gradient(260deg, #ff8240 0, #ff7049 12.5%, #ff5e51 25%, #ff4c55 37.5%, #ff3858 50%, #e92459 62.5%, #d50f5a 75%, #c3005c 87.5%, #b2005d 100%)",
        },
        offset: {
          x: 50,
          y: 85,
        },
      }).showToast();
    }
  } else {
    antesDebeIniciarSeccion(
      "Antes debe iniciar seccion",
      "./pag-iniciar-seccion.html",
      "#FF6262"
    );
  }
}

// ---------------Favorito---------------

let favorito = document.getElementById("favorito");
favorito.addEventListener("click", function () {
  if (nombreCuentaActiva) {
    antesDebeIniciarSeccion(
      "Sin favoritos 😭 ",
      "",
      "linear-gradient(to right, #00b09b, #96c93d)"
    );
  } else {
    antesDebeIniciarSeccion(
      "Antes debe iniciar seccion",
      "./pag-iniciar-seccion.html",
      "#FF6262"
    );
  }
});
// --------------------

function antesDebeIniciarSeccion(text, pagina, color) {
  Toastify({
    text,
    duration: 1200,
    destination: pagina,
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: color,
    },
    offset: {
      y: 90,
    },
  }).showToast();
}
