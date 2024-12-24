const cardInfo = document.querySelector("#card");
const startButton = document.getElementById("start-btn")
const resetButton = document.getElementById("reset-btn")
const guessText = document.getElementById("guess-text");
const userInput = document.getElementById("user-input");
const cardText = document.getElementById("card-text")
let currentNum;
let currentInputValue = ""



startButton.onclick = function () {
    startGame()
}

resetButton.onclick = function () {
    guessText.style.display = "none"
    userInput.value = ""
    cardText.innerText = "?"
    cardText.style.fontSize = "10rem"
}

userInput.addEventListener('input', (event) => {
    console.log(event.target.value)
    currentInputValue = event.target.value
})

const randomNumber = () => {
    currentNum = Math.floor(Math.random()* 101)
    if(currentNum.toString().length > 1){
        cardText.style.fontSize = "7rem"
    }
    return currentNum
}

const startGame = () =>{
    resetButton.style.display = "inline"
    guessText.style.display = "block"
    randomNumber()
    cardText.innerText = currentNum
}
