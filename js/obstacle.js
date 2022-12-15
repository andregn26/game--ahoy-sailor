//Obstacle
const rocksArray = []
class Rock {
  constructor(radius, speed) {
    this.x = Math.random() * canvas.width
    this.y = 0 - radius * 2
    this.radius = radius
    this.speed = speed
    this.distance
  }
  update() {
    this.y += this.speed
  }
  draw() {
    ctx.fillStyle = "brown"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.stroke()
  }
}

function handleRocks() {
  if (gameFrame % 300 === 0) {
    rocksArray.push(new Rock(40, 1.5))
    console.log("this console -->", rocksArray)
  }
  for (let i = 0; i < rocksArray.length; i++) {
    rocksArray[i].update()
    rocksArray[i].draw()
  }
  for (let i = 0; i < rocksArray.length; i++) {
    if (rocksArray[i].y > canvas.height + rocksArray[i].radius * 2) {
      rocksArray.splice(i, 1)
    }
  }
}

let time = 0

const seagulsArray = []
class Seagul {
  constructor(radius, speed) {
    this.x = Math.random() * canvas.width
    this.y = 0 - radius * 2
    this.radius = radius
    this.speed = speed
    this.distance
  }
  update() {
    this.y += this.speed
    this.x += Math.cos(time) * 3 // y = ƒ(x)
  }
  draw() {
    ctx.fillStyle = "white"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.stroke()
  }
}

function handleSeaguls() {
  if (gameFrame % 700 === 0) {
    seagulsArray.push(new Seagul(20, 0.7))
  }
  for (let i = 0; i < seagulsArray.length; i++) {
    seagulsArray[i].update()
    seagulsArray[i].draw()
  }
}
