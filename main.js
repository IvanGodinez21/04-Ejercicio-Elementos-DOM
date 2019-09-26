var btnSumar = document.querySelector("#btnSumar")
var btnRestar = document.querySelector("#btnRestar")
var btnMultipicar = document.querySelector("#btnMultiplicar")
var btnDivir = document.querySelector("#btnDividr")
var btnBorrar = document.querySelector("#btnBorrar")
var inpNo1 = document.querySelector("#numero1")
var inpNo2 = document.querySelector("#numero2")
var inpResultado = document.querySelector("#resultado")
var btnProbar = document.querySelector("#btnProbar")

btnProbar.addEventListener("click", () => {
    let num = Number(inpNo1.value)
    let num2 = Number(inpNo2.value)

    if (num === num2) {
        alert("Son identicos")
    }
    else if (num <= 18) {
        alert("diferentes")
    }

    if (num >= 18) {
        alert ("Bienvenido Bruh")
    } 
    else {
        alert("Esta no es una zona segura, porfavor vuelva a una zona segura")
    }

    if (num < 1000) {
        alert("Es una centena")
    }
    else {
        alert("No es una centena")
    }
})

var rol = prompt("¿Qué tipo de usuario eres?")
rol = rol.toLowerCase() // rol.toUpperCase()

switch(rol) {
    case "estudiante":
        console.log("Bienvenido a SICEUC")
        alert("Bienvenido a SICEUC")
        break
    case "maestro":
        console.log("Bienvenido al sistema de calificaciones")
        alert("Bienvenido al sistema de calificaciones")
        break
    default:
        alert("Usuario denegado")
}

btnSumar.addEventListener("click", () => {
    inpResultado.value = Number(inpNo1.value) + Number(inpNo2.value)
})

btnRestar.addEventListener("click", () => {
    inpResultado.value = Number(inpNo1.value) - Number(inpNo2.value)
})

btnMultipicar.addEventListener("click", () => {
    inpResultado.value = Number(inpNo1.value) * Number(inpNo2.value)
})

btnDividir.addEventListener("click", () => {
    inpResultado.value = Number(inpNo1.value) / Number(inpNo2.value)
})

btnBorrar.addEventListener("click", () => {
    inpResultado.value = ""
    inpNo1.value = ""
    inpNo2.value = ""
})


console.log(inpNo1)
console.log(btnSumar)
console.log(btnRestar)
console.log(btnMultipicar)
console.log(btnDivir)
console.log(btnBorrar)