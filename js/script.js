
const divMujer = document.querySelector("#mujer")
const divHombre = document.querySelector("#hombre")
const divNino = document.querySelector("#ninos")



divMujer.addEventListener("click",()=>{
    localStorage.setItem("catSexo", "mujer")
})
divHombre.addEventListener("click",()=>{
    localStorage.setItem("catSexo", "hombre")
})
divNino.addEventListener("click", ()=>{
    localStorage.setItem("catSexo","nino")
})




// localStorage.setItem("catSexoGral",)