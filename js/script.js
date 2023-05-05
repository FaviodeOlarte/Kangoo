const divMujer = document.querySelector("#mujer");
const divHombre = document.querySelector("#hombre");
const divNino = document.querySelector("#ninos");

divMujer.addEventListener("click", () => {
  localStorage.setItem("catSexo", "mujer");
});
divHombre.addEventListener("click", () => {
  localStorage.setItem("catSexo", "hombre");
});
divNino.addEventListener("click", () => {
  localStorage.setItem("catSexo", "nino");
});

const formBusqueda = document.getElementById("form-busqueda");

formBusqueda.addEventListener("submit", function (evento) {
  evento.preventDefault(); // Evita que la página se recargue al enviar el formulario

  const cadenaDeBusqueda = document.getElementById("input-busqueda").value;
  const productosFiltrados = filtrarProductos(cadenaDeBusqueda);
  let existeBusqueda = Object.keys(productosFiltrados).length;
  if (existeBusqueda > 0 && !cadenaDeBusqueda == "") {
    redirigirAPaginaDeProductos(productosFiltrados);
  } else {
    Toastify({
      text: "No existen productos que coincidan con su busqueda",
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
});

function filtrarProductos(cadenaDeBusqueda) {
  return productos.filter((producto) => {
    return producto.nombre
      .toLowerCase()
      .includes(cadenaDeBusqueda.toLowerCase());
  });
}
function redirigirAPaginaDeProductos(productosFiltrados) {
  localStorage.setItem("catSexo", "");
  const cadenaDeBusquedaCodificada = encodeURIComponent(
    document.getElementById("input-busqueda").value
  );
  const url = `./pages/pagProductos.html?busqueda=${cadenaDeBusquedaCodificada}`;
  window.location.href = url;
}
