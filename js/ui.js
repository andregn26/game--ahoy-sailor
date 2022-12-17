//START
const btnStartGame = document.querySelector("#btn--startGame")
const startContainer = document.querySelector("#start_container")
const tutorialContainer = document.querySelector("#tutorial_container")

//INSTRUCTIONS

//GAMEPLAYING
const playingContainer = document.querySelector("#game_container")

//GAMEWIN

//GAMEOVER

//EVENTHANDLERS
btnStartGame.addEventListener("click", function () {
  startContainer.classList.add("d-none")
  playingContainer.classList.remove("d-none")
  startGame()
})
