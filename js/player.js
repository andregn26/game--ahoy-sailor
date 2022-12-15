//Player
let delay = 30

class Player {
  constructor() {
    this.x = canvas.width
    this.y = canvas.height / 2
    this.radius = 50
    this.angle = 0
    this.frameX = 0
    this.frameY = 0
    this.frame = 0
    this.spriteWidth = 200
    this.spriteHeight = 200
  }
  update() {
    //dx stands for "displacement of the X-Axis". Represents the movement
    const dx = this.x - mouse.x
    const dy = this.y - mouse.y
    if (mouse.x != this.x) {
      this.x -= dx / delay
    }
    if (mouse.y != this.y) {
      this.y -= dy / delay
    }
  }
  draw() {
    if (mouse.click) {
      ctx.lineWidth = 0.2
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(mouse.x, mouse.y)
      ctx.stroke()
    }
    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.closePath()
    ctx.fillRect(this.x, this.y, this.radius, 10)
  }
}

const player = new Player()
