const cardInfo = document.querySelector("#card");
const startButton = document.getElementById("start-btn")
const resetButton = document.getElementById("reset-btn")
let guessText = document.getElementById("guess-text");
const userInput = document.getElementById("user-input");
const cardText = document.getElementById("card-text")
let currentNum;
let currentInputValue;



startButton.onclick = function () {
    startGame()
    startButton.style.display = "none"
}

resetButton.onclick = function () {
    guessText.style.display = "none"
    userInput.value = ""
    cardText.innerText = "?"
    cardText.style.fontSize = "10rem"
    startButton.style.display = "inline"
}

userInput.addEventListener('input', (event) => {
    currentInputValue = event.target.value
    if(currentInputValue == currentNum){
        gameOver()
    } 
})


const randomNumber = () => {
    currentNum = Math.floor(Math.random()* 101)
    if(currentNum.toString().length > 1){
        cardText.style.fontSize = "7rem"
    }
    return currentNum
}

const gameOver = () => {
    guessText.innerText = "Yay you won!"
    cardText.innerText = currentNum
    startButton.style.display = "none"
}
const startGame = () =>{
    resetButton.style.display = "inline"
    guessText.style.display = "block"
    randomNumber()
    console.log(currentNum, currentInputValue)
   
}
