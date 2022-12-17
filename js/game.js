class Game {
  constructor() {
    this.player = {}
    this.rocksArray = []
    this.seagullsArray = []
    this.fishesArray = []
    this.animationId = null
    this.gameWin = false
    this.gameOver = false
    this.life = 100
    this.score = 0
  }
}

let currentGame = new Game()
let player = new Player()
let currentRocksArray = currentGame.rocksArray
currentSeagullsArray = currentGame.seagullsArray
currentFishesArray = currentGame.fishesArray
currentScore = currentGame.score
currentLife = currentGame.life
currentGameOver = currentGame.gameOver
currentAnimationId = currentGame.animationId

let gameFrame = 0

let crashSound = document.createElement("audio")
// crashSound.src = "../audio/crash.ogg"
let seagulsCurrentTime = 0
let fishesCurrentTime = 0

function handlePlayer() {
  player.update()
  player.draw()
}

function handleRocks() {
  if (gameFrame % 350 === 0) {
    currentRocksArray.push(new Rock(50, 1.5))
    // console.log("this console -->", rocksArray)
  }
  for (let i = 0; i < currentRocksArray.length; i++) {
    currentRocksArray[i].update()
    currentRocksArray[i].draw()
  }
  for (let i = 0; i < currentRocksArray.length; i++) {
    if (
      currentRocksArray[i].y >
      canvas.height + currentRocksArray[i].radius * 2
    ) {
      currentRocksArray.splice(i, 1)
    }
    if (
      currentRocksArray[i].distance <
      currentRocksArray[i].radius + player.radius
    ) {
      if (!currentRocksArray[i].damageCounted) {
        currentLife = currentLife - 20
        currentRocksArray[i].damageCounted = true
        crashSound.play()
        console.log(currentLife)
      }
    }
  }
}

function handleSeaguls() {
  if (gameFrame % 500 === 0) {
    currentSeagullsArray.push(new Seagul(20))
  }
  for (let i = 0; i < currentSeagullsArray.length; i++) {
    currentSeagullsArray[i].update()
    currentSeagullsArray[i].draw()
    // console.log(seagulsArray)
  }
  for (let i = 0; i < currentSeagullsArray.length; i++) {
    if (
      currentSeagullsArray[i].y >
      canvas.height + currentSeagullsArray[i].radius * 2
    ) {
      currentSeagullsArray.splice(i, 1)
    }
    if (
      currentSeagullsArray[i].distance <
      currentSeagullsArray[i].radius + player.radius
    ) {
      console.log("colision seagul")
      currentScore--
    }
  }
}

function handleFishes() {
  if (gameFrame % 150 === 0) {
    currentFishesArray.push(new Fish(30, 0.7))
  }
  for (let i = 0; i < currentFishesArray.length; i++) {
    currentFishesArray[i].update()
    currentFishesArray[i].draw()
    // console.log(fishesArray)
    if (
      currentFishesArray[i].y >
      canvas.height + currentFishesArray[i].radius * 2
    ) {
      currentFishesArray.splice(i, 1)
    }
  }
  for (let i = 0; i < currentFishesArray.length; i++) {
    if (
      currentFishesArray[i].distance <
      currentFishesArray[i].radius + player.radius
    ) {
      if (!currentFishesArray[i].pointCounted) {
        currentScore += 10
        currentFishesArray[i].pointCounted = true
      }
      if ((currentFishesArray[i].pointCounted = true)) {
        currentFishesArray.splice(i, 1)
      }

      // console.log("colision fish")
    }
  }
}

function startGame() {
  currentGame.player = player
  animateCanva()
}
function gameOver() {
  if (currentLife <= 0) {
    currentGameOver = true
    console.log("gameover")
  }
  if (currentScore < 0) {
    currentGameOver = true
    console.log("gameover")
  }
}

//Animate loop
function time() {
  if (gameFrame % 30 === 0) {
    seagulsCurrentTime += 1
    fishesCurrentTime += 1
  }
}

function clearCanva() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}
function animateCanva() {
  clearCanva()
  time()
  gameFrame++
  handleFishes()
  handleRocks()
  handlePlayer()
  handleSeaguls()

  ctx.fillStyle = "black"
  ctx.fillText("score: " + currentScore, 10, 50)
  ctx.fillStyle = "black"
  ctx.fillText("life: " + currentLife, 400, 50)
  ctx.fillStyle = "black"
  ctx.fillText("time: " + currentGame.timer, 400, 150)
  gameOver()

  if (!currentGameOver) {
    requestAnimationFrame(animateCanva)
  }
  // console.log(time)
}
