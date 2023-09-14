//VARIAVEIS
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

console.log(`O primeiro Numero rondômico é: ${Number(randomNumber)}`) 

// EVENTOS



btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', pressEnterReset)


//  FUNÇÕES

function handleTryClick(event) {
    event.preventDefault()

    const inputNumber = document.querySelector("#inputNumber")

    if(Number(inputNumber.value) == randomNumber){
        toggleScreen()

        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
    }

    
    if(inputNumber.value !== ""){
        xAttempts++
    }
    else{
        alert('O numero nao foi definido')
    }
    
    console.log(inputNumber.value)

    inputNumber.value = "" 
}







function handleResetClick(){
    toggleScreen()
    xAttempts = 1
    randomNumber = Math.round(Math.random() * 10)
    console.log(`O Numero rondômico após o acerto é ${Number(randomNumber)}`) 
}


function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function pressEnterReset(e){
    if(e.key === 'Enter' && screen1.classList.contains("hide")){
        handleResetClick()
    }
}
