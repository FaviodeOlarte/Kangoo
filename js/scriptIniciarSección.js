//  ---------------------iniciar seccion --------------------
let usuario = document.getElementById("usuario");
let contrasenia = document.getElementById("contrasenia");
let iniciarSeccion = document.getElementById("iniciarSeccion");

let usuarioJSON = localStorage.getItem("usuarios");
let usuarios = JSON.parse(usuarioJSON);

iniciarSeccion.addEventListener("click", () => {
  if (!usuario.value) {
    toastySeccion(
      "Por favor ingresar correo electrónico  ",
      "ToastyInputUser",
      "rgb(236, 186, 57)"
    );
  } else if (usuario.value) {
    let correoExist = usuarios.find(
      (u) =>
        u.userEmail === usuario.value && u.userPassword === contrasenia.value
    );

    if (correoExist) {
      sessionStorage.setItem("cuentaActiva", JSON.stringify(correoExist));
      let nombreCuentaActiva = JSON.parse(
        sessionStorage.getItem("cuentaActiva")
      ).userNombre.toUpperCase();

      sweetUserOk(`Bienvenido ${usuario.value.toUpperCase()}`);
    } else {
      toastySeccion(
        "Usuario o contraseña incorrecta  ",
        "ToastyError",
        "#FF6262"
      );
    }
  }
});

function toastySeccion(text, className, background) {
  Toastify({
    text,
    duration: 2500,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    className,
    style: {
      background,
    },
  }).showToast();
}

//  -----------------------

const tarjeta = document.querySelector("#login-box");
const tarjetaFront = document.querySelector(".login-box-front");
const tarjetaBack = document.querySelector(".login-box-back");
const crearCuenta = document.querySelector(".create-account-link");
const loginBox = document.getElementById("login-box");

let passwordCheck = document.getElementById("passwordCheck");
crearCuenta.addEventListener("click", girarTarjeta);

const nuevoUsuarioName = document.getElementById("nuevoUsuarioName");
const nuevoUsuarioApellido = document.getElementById("nuevoUsuarioApellido");
const nuevoUsuarioEmail = document.getElementById("nuevoUsuarioEmail");
const nuevoUsuarioPassword = document.getElementById("password");
const nuevoUsuarioPasswordCheck = document.getElementById("passwordCheck");
const registrarse = document.getElementById("registrarse");
const girarIniciarSeccion = document.getElementById("iniciarSeccionFront");

if (!localStorage.getItem("usuarios")) {
  usuarios = [
    {
      userNombre: "admin",
      userApellido: "admin",
      userEmail: "admin",
      userPassword: String(123),
    },
  ];
  usuarioJSON = JSON.stringify(usuarios);
  localStorage.setItem("usuarios", usuarioJSON);
}

registrarse.addEventListener("click", () => {
  let userNombre = nuevoUsuarioName.value;
  let userApellido = nuevoUsuarioApellido.value;
  let userEmail = nuevoUsuarioEmail.value;
  let userPassword = nuevoUsuarioPassword.value;
  let buscarUserNuevo = false;

  if (userNombre && userApellido && userEmail) {
    if (String(passwordCheck.value) === String(nuevoUsuarioPassword.value)) {
      if (!usuarios.find((u) => u.userEmail === userEmail)) {
        usuarios.push({ userNombre, userApellido, userEmail, userPassword });
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        sweetUserOk(
          `Bienvenido  ${userNombre.toUpperCase()}, su usuario se ah creado correctamente`
        );
        girarTarjeta();
      } else alert("Correo existente");
    } else {
      toastySeccion(
        "Las conrtaseñas ingresadas no coinciden  ",
        "ToastyError",
        "#FF6262"
      );
    }
  } else {
    toastySeccion(
      "Es obligatorio completar todos los campos  ",
      "ToastyError",
      "#FF6262"
    );
  }
});

girarIniciarSeccion.addEventListener("click", girarTarjeta);

function girarTarjeta() {
  tarjeta.classList.toggle("show-back");
  tarjetaFront.classList.toggle("ocultar");
  tarjetaBack.classList.toggle("ocultar");
  tarjetaFront.classList.toggle("mostrar");
  tarjetaBack.classList.toggle("mostrar");
  loginBox.classList.toggle("loginFrontBox");
  loginBox.classList.toggle("loginBackBox");
}
let passCheckOk = document.getElementById("passCheckOK");
let passCheckNoOk = document.getElementById("passCheckNoOk");

passwordCheck.addEventListener("change", () => {
  if (nuevoUsuarioPassword.value) {
    if (String(passwordCheck.value) === String(nuevoUsuarioPassword.value)) {
      passCheckNoOk.classList.add("ocultar");
      passCheckNoOk.classList.remove("mostrar");
      passCheckOk.classList.remove("ocultar");
      passCheckOk.classList.add("mostrar");
    } else {
      passCheckNoOk.classList.remove("ocultar");
      passCheckNoOk.classList.add("mostrar");
      passCheckOk.classList.remove("mostrar");
      passCheckOk.classList.add("ocultar");
    }
  }
});

function sweetUserOk(title) {
  Swal.fire({
    position: "center",
    icon: "success",
    title,
    showConfirmButton: false,
    customClass: {
      container: "fondoPopup",
      popup: "popupGlass",
    },
    timer: 2700,
    showClass: {
      popup: "animate__animated animate__zoomInDown",
    },
  }).then(() => {
    window.location.href = "../index.html";
  });
}
