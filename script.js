const cardInfo = document.querySelector("#card");
const startButton = document.getElementById("start-btn")
const resetButton = document.getElementById("reset-btn")
const guessText = document.getElementById("guess-text");
const userInput = document.getElementById("user-input");
const cardText = document.getElementById("card-text")

startButton.onclick = function () {
guessText.style.display = "block"
}

resetButton.onclick = function () {
    guessText.style.display = "none"
}