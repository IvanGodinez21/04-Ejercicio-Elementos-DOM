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

    if (num >= 18) {
        alert ("Bienvenido Bruh")
    } 
    else {
        alert("Adios popo")
    }

    if (num < 1000) {
        alert("Es una centena carnal")
    }
    else {
        alert("Fuera de mis tierras")
    }
})

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