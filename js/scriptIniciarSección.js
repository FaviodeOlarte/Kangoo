
//  ---------------------iniciar seccion --------------------
 let usuario= document.getElementById("usuario")
 let contrasenia= document.getElementById("contrasenia")
 let iniciarSeccion=document.getElementById("iniciarSeccion")


 let usuarioBD="favio"
 let contraseniaBD= 123

 
 iniciarSeccion.addEventListener('click', ()=>{
     if (usuario.value==usuarioBD && contrasenia.value == contraseniaBD){
         alert("Bienvenido " + usuario.value )
     } else { alert("Usuario o contraseña incorrecta")}
 })
