
//  ---------------------iniciar seccion --------------------
 let usuario= document.getElementById("usuario")
 let contrasenia= document.getElementById("contrasenia")
 let iniciarSeccion=document.getElementById("iniciarSeccion")

 
let usuarioJSON= localStorage.getItem("usuarios")
let usuarios= JSON.parse(usuarioJSON)

 iniciarSeccion.addEventListener('click', ()=>{
    if (!usuario.value){
        alert("Por favor ingresar correo")
    }else if(usuario.value){
        let correoExist = usuarios.find(u=>u.userEmail===usuario.value && u.userPassword===contrasenia.value)
        if(correoExist){

            alert("Bienvenido " + usuario.value )
        } else { alert("Usuario o contraseña incorrecta")}

     }

 })



//  -----------------------

const tarjeta= document.querySelector("#login-box")
const tarjetaFront = document.querySelector(".login-box-front")
const tarjetaBack = document.querySelector(".login-box-back")
const crearCuenta=document.querySelector('.create-account-link')
const loginBox = document.getElementById("login-box")

let passwordCheck=document.getElementById("passwordCheck")
crearCuenta.addEventListener("click",girarTarjeta)


const nuevoUsuarioName = document.getElementById("nuevoUsuarioName")
const nuevoUsuarioApellido = document.getElementById("nuevoUsuarioApellido")
const nuevoUsuarioEmail = document.getElementById("nuevoUsuarioEmail")
const nuevoUsuarioPassword = document.getElementById("password")
const nuevoUsuarioPasswordCheck = document.getElementById("passwordCheck")
const registrarse = document.getElementById("registrarse")
const girarIniciarSeccion = document.getElementById("iniciarSeccionFront")

if (!localStorage.getItem("usuarios")){
     usuarios=[{userNombre:"admin", userApellido:"admin",userEmail:"admin",userPassword:String(123)}]
     usuarioJSON=  JSON.stringify(usuarios)
    localStorage.setItem("usuarios",usuarioJSON)

}



registrarse.addEventListener("click",()=>{
    let userNombre=nuevoUsuarioName.value
    let userApellido=nuevoUsuarioApellido.value
    let userEmail= nuevoUsuarioEmail.value
    let userPassword= nuevoUsuarioPassword.value
    let buscarUserNuevo=false

    if (userNombre&&userApellido&&userEmail){
        if ((String(passwordCheck.value) === String(nuevoUsuarioPassword.value))){
            
                    if(!usuarios.find(u=>u.userEmail===userEmail)){
            
                        usuarios.push({userNombre,userApellido,userEmail,userPassword})
                        localStorage.setItem("usuarios",JSON.stringify(usuarios))
                        alert(`Bienvenido  ${userNombre}, su usuario se ah creado correctamente`)
                        girarTarjeta()
                    }else(alert("Correo existente"))

        }else { alert("Las conrtaseñas ingresadas no coinciden")}

    }else{alert("Es obligatorio completar todos los campos")}
})


girarIniciarSeccion.addEventListener("click",girarTarjeta)

function girarTarjeta (){
    tarjeta.classList.toggle("show-back")
    tarjetaFront.classList.toggle("ocultar")
    tarjetaBack.classList.toggle("ocultar")
    tarjetaFront.classList.toggle("mostrar")
    tarjetaBack.classList.toggle("mostrar")
    // loginBox.style.height="500px"
    // loginBox.style.padding="20px 20px"
    loginBox.classList.toggle("loginFrontBox")
    loginBox.classList.toggle("loginBackBox")
}
let passCheckOk= document.getElementById("passCheckOK")
let passCheckNoOk= document.getElementById("passCheckNoOk")

passwordCheck.addEventListener("change", ()=>{
    if(nuevoUsuarioPassword.value){
    if(String(passwordCheck.value) === String(nuevoUsuarioPassword.value) ){
        passCheckNoOk.classList.add("ocultar")
        passCheckNoOk.classList.remove("mostrar")
        passCheckOk.classList.remove("ocultar")
        passCheckOk.classList.add("mostrar")
    }else{
        passCheckNoOk.classList.remove("ocultar")
        passCheckNoOk.classList.add("mostrar")
        passCheckOk.classList.remove("mostrar")
        passCheckOk.classList.add("ocultar")


    }
}

})