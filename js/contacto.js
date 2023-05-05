let borrar = document.getElementById("borrar");
borrar.addEventListener("click", function () {
  Toastify({
    text: "Formulario borrado",
    duration: 1200,
    destination: "",
    gravity: "top",
    position: "right",
    stopOnFocus: true,
    style: {
      background: "#FF6262",
    },
  }).showToast();
});

function toasty(text, pagina, color) {}
