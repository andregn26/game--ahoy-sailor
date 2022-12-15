class Game {
  constructor() {
    this.animationId = null
    this.score = 0
    this.gameOver = false
  }
}

const player = new Player()
let currentLife = 100
let losingLife = 0
let currentScore = 0
let winningScore = 1000
let won = false
let lost = false
let gameFrame = 0

const rocksArray = []
const seagulsArray = []
const fishesArray = []
let seagulsCurrentTime = 0
let fishesCurrentTime = 0

function handleRocks() {
  if (gameFrame % 300 === 0) {
    rocksArray.push(new Rock(40, 1.5))
    // console.log("this console -->", rocksArray)
  }
  for (let i = 0; i < rocksArray.length; i++) {
    rocksArray[i].update()
    rocksArray[i].draw()
  }
  for (let i = 0; i < rocksArray.length; i++) {
    if (rocksArray[i].y > canvas.height + rocksArray[i].radius * 2) {
      rocksArray.splice(i, 1)
    }
    if (rocksArray[i].distance < rocksArray[i].radius + player.radius) {
      if (!rocksArray[i].damageCounted) {
        currentLife = currentLife - 10
        rocksArray[i].damageCounted = true
        console.log(currentLife)
      }
    }
  }
}

function handleSeaguls() {
  if (gameFrame % 700 === 0) {
    seagulsArray.push(new Seagul(20, 0.7))
  }
  for (let i = 0; i < seagulsArray.length; i++) {
    seagulsArray[i].update()
    seagulsArray[i].draw()
    console.log(seagulsArray)
  }
  for (let i = 0; i < seagulsArray.length; i++) {
    if (seagulsArray[i].y > canvas.height + seagulsArray[i].radius * 2) {
      seagulsArray.splice(i, 1)
    }
    if (seagulsArray[i].distance < seagulsArray[i].radius + player.radius) {
      console.log("colision seagul")
      currentScore--
    }
  }
}

function handleFishes() {
  if (gameFrame % 500 === 0) {
    fishesArray.push(new Fish(30, 0.7))
  }
  for (let i = 0; i < fishesArray.length; i++) {
    fishesArray[i].update()
    fishesArray[i].draw()
    console.log(fishesArray)
  }
  for (let i = 0; i < fishesArray.length; i++) {
    if (fishesArray[i].distance < fishesArray[i].radius + player.radius) {
      if (!fishesArray[i].pointCounted) {
        currentScore += 10
        fishesArray[i].pointCounted = true
      }
      if ((fishesArray[i].pointCounted = true)) {
        fishesArray.splice(i, 1)
      }
      console.log("colision fish")
    }
  }
}
